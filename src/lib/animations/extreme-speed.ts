import { compileProgram } from "../program";
import type { Program } from "../program";
import type { EditOptionsSlider, MappedOptions } from "../options";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
uniform float u_percentage;
uniform vec2 u_velocity;

in vec2 a_texCoord;
out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_clipCoord, 0, 1);
  vec2 offset = u_velocity * u_percentage;
  v_texCoord = vec2(a_texCoord.x - offset.x, a_texCoord.y - offset.y);
}
`;

const fragmentShaderSource = `\
#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;

type Attribute = "a_texCoord" | "a_clipCoord";
type Uniform = "u_percentage" | "u_velocity" | "u_image";

type State =
  | { initialized: false }
  | {
      initialized: true;
      program: Program<Attribute, Uniform>;
      vao: WebGLVertexArrayObject;
    };

let state: State = { initialized: false };

export function init(gl: WebGL2RenderingContext) {
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  if (state.initialized) {
    return;
  }

  const program = compileProgram(
    gl,
    vertexShaderSource,
    fragmentShaderSource,
    ["a_texCoord", "a_clipCoord"],
    ["u_percentage", "u_velocity", "u_image"],
  );
  if (!program) {
    throw new Error("Failed to compile the program");
  }

  const vao = gl.createVertexArray();
  if (!vao) {
    throw new Error("Failed to create vertex array object");
  }
  gl.bindVertexArray(vao);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    // prettier-ignore
    new Float32Array([
      // a_clipCoord.x, a_clipCoord.y, a_texCoord.x, a_texCoord
      -1, -1, 0, 0,
      -1, 1, 0, 1,
      1, -1, 1, 0,
      1, 1, 1, 1,
    ]),
    gl.STATIC_DRAW,
  );
  gl.enableVertexAttribArray(program.attributeLocations.a_clipCoord);
  gl.vertexAttribPointer(
    program.attributeLocations.a_clipCoord,
    2,
    gl.FLOAT,
    false,
    4 * 4,
    0,
  );
  gl.enableVertexAttribArray(program.attributeLocations.a_texCoord);
  gl.vertexAttribPointer(
    program.attributeLocations.a_texCoord,
    2,
    gl.FLOAT,
    false,
    4 * 4,
    2 * 4,
  );

  state = {
    initialized: true,
    program,
    vao,
  };
}

const VelocityXOptions: EditOptionsSlider<"velocityX"> = {
  type: "slider",
  label: "Horizontal velocity",
  name: "velocityX",
  default: -1,
  min: -1,
  max: 1,
  step: 1,
} as const;

const VelocityYOptions: EditOptionsSlider<"velocityY"> = {
  type: "slider",
  label: "Vertical velocity",
  name: "velocityY",
  default: 0,
  min: -1,
  max: 1,
  step: 1,
} as const;

export const ExtremeSpeedEditOptions = [VelocityXOptions, VelocityYOptions];

export type ExtremeSpeedOptions = MappedOptions<
  typeof ExtremeSpeedEditOptions,
  "extreme-speed"
>;

export function render(
  gl: WebGL2RenderingContext,
  percentage: number,
  options: ExtremeSpeedOptions,
) {
  if (!state.initialized) {
    throw new Error("Animation has not been initialized: extreme-speed");
  }

  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.uniform2f(
    state.program.uniformLocations.u_velocity,
    options.velocityX,
    options.velocityY,
  );
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  return true;
}
