export const ATTRIB_LOCATIONS = {
  a_position: 0,
  a_texCoords: 1,
  a_normal: 2,
} as const;

export interface Program {
  readonly program: WebGLProgram;
  readonly uniformLocations: Record<string, WebGLUniformLocation | null>;
}

const SHADER_PAIRS = {
  default: {
    vertex: `\
#version 300 es

layout(location = ${ATTRIB_LOCATIONS.a_position}) in vec3 a_position;
layout(location = ${ATTRIB_LOCATIONS.a_texCoords}) in vec2 a_texCoords;
layout(location = ${ATTRIB_LOCATIONS.a_normal}) in vec3 a_normal;

uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;

out vec2 v_texCoords;
out vec3 v_normal;
out vec3 v_position;

void main() {
  mat4 modelView = u_view * u_model;
  v_position = vec3(modelView * vec4(a_position, 1.0));
  gl_Position = u_projection * vec4(v_position, 1.0);
  // flip y coordinate because readPixels() will invert the image again
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
  v_normal = (transpose(inverse(modelView)) * vec4(a_normal, 0)).xyz;
}
    `,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;
in vec3 v_normal;
in vec3 v_position;

struct Material {
  sampler2D diffuse;
  vec3 specular;
  float shininess;
};

struct DirectionalLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 direction;
};

struct PointLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  float attenuation1;
  float attenuation2;
};

struct SpotLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  vec3 direction;
  float innerCos;
  float outerCos;
  float attenuation1;
  float attenuation2;
};

uniform Material u_material;
uniform DirectionalLight u_directionalLight;
uniform PointLight u_pointLight;
uniform SpotLight u_spotLight;

out vec4 outColor;

void main() {
  vec3 texel = texture(u_material.diffuse, v_texCoords).xyz;
  vec3 color = vec3(0.0, 0.0, 0.0);
  vec3 normal = normalize(v_normal);
  vec3 fragToCamera = normalize(-v_position);

  color += u_directionalLight.ambient * texel;

  vec3 directionalDir = normalize(-u_directionalLight.direction);
  float directionalDiff = max(dot(directionalDir, normal), 0.0);
  color += u_directionalLight.diffuse * texel * directionalDiff;

  vec3 directionalHalf = normalize(directionalDir + fragToCamera);
  float directionalSpec = pow(max(dot(directionalHalf, normal), 0.0), u_material.shininess);
  color += u_directionalLight.specular * u_material.specular * directionalSpec;

  float pointDist = length(u_pointLight.position - v_position);
  float pointAtten = 1.0 / (1.0 + u_pointLight.attenuation1 * pointDist + u_pointLight.attenuation2 * pointDist * pointDist);
  color += u_pointLight.ambient * texel * pointAtten;

  vec3 pointDir = normalize(u_pointLight.position - v_position);
  float pointDiff = max(dot(pointDir, normal), 0.0);
  color += u_pointLight.diffuse * texel * pointDiff * pointAtten;

  vec3 pointHalf = normalize(pointDir + fragToCamera);
  float pointSpec = pow(max(dot(pointHalf, normal), 0.0), u_material.shininess);
  color += u_pointLight.specular * u_material.specular * pointSpec * pointAtten;

  float spotDist = length(u_spotLight.position - v_position);
  float spotAtten = 1.0 / (1.0 + u_spotLight.attenuation1 * spotDist + u_spotLight.attenuation2 * spotDist * spotDist);
  vec3 spotDir = normalize(u_spotLight.position - v_position);
  float spotCos = dot(normalize(-u_spotLight.direction), spotDir);
  float spotIntensity = smoothstep(u_spotLight.outerCos, u_spotLight.innerCos, spotCos);
  color += u_spotLight.ambient * texel * spotAtten * spotIntensity;

  float spotDiff = max(dot(spotDir, normal), 0.0);
  color += u_spotLight.diffuse * texel * spotDiff * spotAtten * spotIntensity;

  vec3 spotHalf = normalize(spotDir + fragToCamera);
  float spotSpec = pow(max(dot(spotHalf, normal), 0.0), u_material.shininess);
  color += u_spotLight.specular * u_material.specular * spotSpec * spotAtten * spotIntensity;

  outColor = vec4(color, 1.0);
}
    `,
  },
} as const;

type ShaderType = keyof typeof SHADER_PAIRS;

export class ProgramFactory {
  private readonly programs: Partial<Record<ShaderType, Program>> = {};

  constructor(private readonly gl: WebGL2RenderingContext) {}

  createProgram(type: ShaderType): Program {
    let result = this.programs[type];
    if (!result) {
      result = this.programs[type] = {
        program: linkProgram(
          this.gl,
          SHADER_PAIRS[type].vertex,
          SHADER_PAIRS[type].fragment,
        ),
        uniformLocations: {},
      };
    }
    return result;
  }

  destroy() {
    for (const program of Object.values(this.programs)) {
      this.gl.deleteProgram(program.program);
    }
  }
}

export function setUniforms(
  gl: WebGL2RenderingContext,
  program: Program,
  uniforms: Record<string, unknown>,
): void {
  for (const [name, value] of Object.entries(uniforms)) {
    if (!(name in program.uniformLocations)) {
      program.uniformLocations[name] = gl.getUniformLocation(
        program.program,
        name,
      );
    }
    const location = program.uniformLocations[name];
    if (name === "u_image" && typeof value === "number") {
      gl.uniform1i(location, value);
    } else if (Array.isArray(value)) {
      if (value.length === 2) {
        gl.uniform2fv(location, value);
      } else if (value.length === 3) {
        gl.uniform3fv(location, value);
      } else if (value.length === 4) {
        gl.uniform4fv(location, value);
      } else if (value.length === 9) {
        gl.uniformMatrix3fv(location, false, value);
      } else if (value.length === 16) {
        gl.uniformMatrix4fv(location, false, value);
      }
    } else if (typeof value === "number") {
      gl.uniform1f(location, value);
    } else if (typeof value === "boolean") {
      gl.uniform1i(location, value ? 1 : 0);
    }
  }
}

function linkProgram(
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
): WebGLProgram {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);

  let fragmentShader;
  try {
    fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource,
    );
  } catch (e) {
    gl.deleteShader(vertexShader);
    throw e;
  }

  const program = gl.createProgram();
  if (program === null) {
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    throw new Error("Failed to create program");
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.detachShader(program, fragmentShader);
  gl.detachShader(program, vertexShader);
  gl.deleteShader(fragmentShader);
  gl.deleteShader(vertexShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Failed to link program: ${info}`);
  }

  return program;
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader {
  const shader = gl.createShader(type);
  if (shader === null) {
    throw new Error(`Failed to create shader: ${type}`);
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Failed to compile shader: ${info}`);
  }
  return shader;
}
