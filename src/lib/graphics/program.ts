export const ATTRIB_LOCATIONS: Record<string, number> = {
  a_position: 0,
  a_texCoords: 1,
};

export interface Program {
  program: WebGLProgram;
  uniformLocations: Record<string, WebGLUniformLocation | null>;
}

const SHADER_PAIRS = {
  default: {
    vertex: `\
#version 300 es

layout(location = ${ATTRIB_LOCATIONS.a_position}) in vec2 a_position;
layout(location = ${ATTRIB_LOCATIONS.a_texCoords}) in vec2 a_texCoords;

uniform mat3 u_transform;

out vec2 v_texCoords;

void main() {
  gl_Position = vec4((u_transform * vec3(a_position, 1.0)).xy, 0.0, 1.0);
  v_texCoords = a_texCoords;
}
    `,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;

uniform sampler2D u_image;

out vec4 outColor;

void main {
  outColor = texture(u_image, v_texCoords);
}
    `,
  },
};

type ShaderType = keyof typeof SHADER_PAIRS;

const programs: Partial<Record<ShaderType, Program>> = {};

export function createProgram(
  gl: WebGL2RenderingContext,
  type: ShaderType,
): Program {
  let result = programs[type];
  if (!result) {
    result = programs[type] = {
      program: linkProgram(
        gl,
        SHADER_PAIRS[type].vertex,
        SHADER_PAIRS[type].fragment,
      ),
      uniformLocations: {},
    };
  }
  return result;
}

export function setUniforms(
  gl: WebGL2RenderingContext,
  program: Program,
  uniforms: Record<string, unknown>,
): void {
  for (const [name, value] of Object.entries(uniforms)) {
    if (!(name in program.uniformLocations)) {
      program.uniformLocations[name] = gl.getUniformLocation(program, name);
    }
    if (name === "u_image" && typeof value === "number") {
      gl.uniform1i(name, value);
    } else if (Array.isArray(value)) {
      if (value.length === 2) {
        gl.uniform2fv(name, value);
      } else if (value.length === 3) {
        gl.uniform3fv(name, value);
      } else if (value.length === 4) {
        gl.uniform4fv(name, value);
      }
    } else if (typeof value === "number") {
      gl.uniform1f(name, value);
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
