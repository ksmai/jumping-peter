export const ATTRIB_LOCATIONS = {
  a_position: 0,
  a_texCoords: 1,
} as const;

export interface Program {
  readonly program: WebGLProgram;
  readonly uniformLocations: Record<string, WebGLUniformLocation | null>;
}

const SHADER_PAIRS = {
  "2d": {
    vertex: `\
#version 300 es

layout(location = ${ATTRIB_LOCATIONS.a_position}) in vec2 a_position;
layout(location = ${ATTRIB_LOCATIONS.a_texCoords}) in vec2 a_texCoords;

uniform mat4 u_transform;

out vec2 v_texCoords;

void main() {
  vec4 pos = u_transform * vec4(a_position, 0.0, 1.0);
  // flip y coordinate because readPixels() will invert the image again
  gl_Position = vec4(pos.x, -pos.y, pos.z, pos.w);
  v_texCoords = a_texCoords;
}
    `,
    fragment: `\
#version 300 es
precision highp float;

in vec2 v_texCoords;

uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoords);
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
