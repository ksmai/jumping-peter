export const ATTRIB_LOCATIONS = {
  a_position: 0,
  a_texCoords: 1,
  a_normal: 2,
} as const;

export interface Program {
  readonly program: WebGLProgram;
  readonly uniformLocations: Record<string, WebGLUniformLocation | null>;
}

const vertexShaderForQuad = `\
#version 300 es

layout(location = ${ATTRIB_LOCATIONS.a_position}) in vec2 a_position;
layout(location = ${ATTRIB_LOCATIONS.a_texCoords}) in vec2 a_texCoords;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
`;

const PROGRAMS = {
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

vec3 computeLight(SpotLight light, vec3 normal, vec3 fragToCamera, vec3 texel) {
  float dist = length(light.position - v_position);
  float attenuation = 1.0 / (1.0 + light.attenuation1 * dist + light.attenuation2 * dist * dist);
  vec3 dir = normalize(light.position - v_position);
  float angle = dot(normalize(-light.direction), dir);
  float intensity = smoothstep(light.outerCos, light.innerCos, angle);

  float diff = max(dot(dir, normal), 0.0);

  vec3 halfVec = normalize(dir + fragToCamera);
  float spec = pow(max(dot(halfVec, normal), 0.0), u_material.shininess);

  vec3 ambient = light.ambient * texel * attenuation * intensity;
  vec3 diffuse = light.diffuse * texel * diff * attenuation * intensity;
  vec3 specular = light.specular * u_material.specular * spec * attenuation * intensity;

  return ambient + diffuse + specular;
}

void main() {
  vec3 texel = texture(u_material.diffuse, v_texCoords).xyz;
  vec3 color = vec3(0.0, 0.0, 0.0);
  // front facing is actually the back face since we flipped y-axis in the vertex shader
  vec3 normal = normalize(v_normal) * (1.0 - 2.0 * float(gl_FrontFacing));
  vec3 fragToCamera = normalize(-v_position);

  color += computeLight(SpotLight(
    u_directionalLight.ambient,
    u_directionalLight.diffuse,
    u_directionalLight.specular,
    -u_directionalLight.direction + v_position,
    u_directionalLight.direction,
    // disable intensity
    -2.0, -3.0,
    // disable attenuation
    0.0, 0.0
  ), normal, fragToCamera, texel);

  color += computeLight(SpotLight(
    u_pointLight.ambient,
    u_pointLight.diffuse,
    u_pointLight.specular,
    u_pointLight.position,
    -u_pointLight.position + v_position,
    // disable intensity
    -2.0, -3.0,
    u_pointLight.attenuation1,
    u_pointLight.attenuation2
  ), normal, fragToCamera, texel);

  color += computeLight(u_spotLight, normal, fragToCamera, texel);

  outColor = vec4(color, 1.0);
}
    `,
  },
  invert: {
    vertex: vertexShaderForQuad,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = vec4(1.0 - texture(u_image, v_texCoords).rgb, 1.0);
}
    `,
  },

  kernal: {
    vertex: vertexShaderForQuad,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_kernal;

out vec4 outColor;

vec3 getColor(vec2 offset) {
  vec2 coords = v_texCoords + offset / vec2(textureSize(u_image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(u_image, coords).rgb * inRange;
}

void main() {
  vec3 color = vec3(0.0, 0.0, 0.0);

  color += u_kernal[0][0] * getColor(vec2(-1.0,  1.0));
  color += u_kernal[0][1] * getColor(vec2(-1.0,  0.0));
  color += u_kernal[0][2] * getColor(vec2(-1.0, -1.0));
  color += u_kernal[1][0] * getColor(vec2( 0.0,  1.0));
  color += u_kernal[1][1] * getColor(vec2( 0.0,  0.0));
  color += u_kernal[1][2] * getColor(vec2( 0.0, -1.0));
  color += u_kernal[2][0] * getColor(vec2( 1.0,  1.0));
  color += u_kernal[2][1] * getColor(vec2( 1.0,  0.0));
  color += u_kernal[2][2] * getColor(vec2( 1.0, -1.0));

  outColor = vec4(color, 1.0);
}
    `,
  },

  grayscale: {
    vertex: vertexShaderForQuad,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform vec3 u_weights;

out vec4 outColor;

void main() {
  vec3 weighted = u_weights * texture(u_image, v_texCoords).rgb;
  float average = weighted.x + weighted.y + weighted.z;
  outColor = vec4(average, average, average, 1.0);
}
    `,
  },

  contrast: {
    vertex: vertexShaderForQuad,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = vec4(texture(u_image, v_texCoords).rgb, 1.0);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
    `,
  },
} as const;

export type ProgramType = keyof typeof PROGRAMS;

export class ProgramFactory {
  private readonly programs: Partial<Record<ProgramType, Program>> = {};

  constructor(private readonly gl: WebGL2RenderingContext) {}

  createProgram(type: ProgramType): Program {
    let result = this.programs[type];
    if (!result) {
      result = this.programs[type] = {
        program: linkProgram(
          this.gl,
          PROGRAMS[type].vertex,
          PROGRAMS[type].fragment,
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
    if (
      ["u_image", "u_material.diffuse"].includes(name) &&
      typeof value === "number"
    ) {
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
