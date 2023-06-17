import quadVertexShader from "$lib/shaders/quad.vertex.glsl?raw";
import defaultVertexShader from "$lib/shaders/default.vertex.glsl?raw";
import defaultFragmentShader from "$lib/shaders/default.fragment.glsl?raw";
import default3dVertexShader from "$lib/shaders/default3d.vertex.glsl?raw";
import default3dFragmentShader from "$lib/shaders/default3d.fragment.glsl?raw";
import invertFragmentShader from "$lib/shaders/invert.fragment.glsl?raw";
import wigglingFragmentShader from "$lib/shaders/wiggling.fragment.glsl?raw";
import mixFragmentShader from "$lib/shaders/mix.fragment.glsl?raw";
import vignetteFragmentShader from "$lib/shaders/vignette.fragment.glsl?raw";
import contrastFragmentShader from "$lib/shaders/contrast.fragment.glsl?raw";
import kernelFragmentShader from "$lib/shaders/kernel.fragment.glsl?raw";
import gradient2FragmentShader from "$lib/shaders/gradient2.fragment.glsl?raw";
import gradient8FragmentShader from "$lib/shaders/gradient8.fragment.glsl?raw";
import bloomFragmentShader from "$lib/shaders/bloom.fragment.glsl?raw";
import petrifiedFragmentShader from "$lib/shaders/petrified.fragment.glsl?raw";
import petrifiedBrokenFragmentShader from "$lib/shaders/petrified-broken.fragment.glsl?raw";

export interface Program {
  readonly program: WebGLProgram;
  readonly uniformLocations: Record<string, WebGLUniformLocation | null>;
}

const PROGRAMS = {
  default: {
    vertex: defaultVertexShader,
    fragment: defaultFragmentShader,
  },

  default3d: {
    vertex: default3dVertexShader,
    fragment: default3dFragmentShader,
  },

  wiggling: {
    vertex: defaultVertexShader,
    fragment: wigglingFragmentShader,
  },

  petrified: {
    vertex: defaultVertexShader,
    fragment: petrifiedFragmentShader,
  },

  petrifiedBroken: {
    vertex: defaultVertexShader,
    fragment: petrifiedBrokenFragmentShader,
  },

  invert: {
    vertex: quadVertexShader,
    fragment: invertFragmentShader,
  },

  kernel: {
    vertex: quadVertexShader,
    fragment: kernelFragmentShader,
  },

  gradient2: {
    vertex: quadVertexShader,
    fragment: gradient2FragmentShader,
  },

  gradient8: {
    vertex: quadVertexShader,
    fragment: gradient8FragmentShader,
  },

  contrast: {
    vertex: quadVertexShader,
    fragment: contrastFragmentShader,
  },

  bloom: {
    vertex: quadVertexShader,
    fragment: bloomFragmentShader,
  },

  mix: {
    vertex: quadVertexShader,
    fragment: mixFragmentShader,
  },

  vignette: {
    vertex: quadVertexShader,
    fragment: vignetteFragmentShader,
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
    if (/image/i.test(name) && typeof value === "number") {
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
