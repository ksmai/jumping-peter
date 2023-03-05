import { compileProgram } from "../program";
import type { Program } from "../program";
import type { EditOptionsSlider, MappedOptions } from "../options";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

// progress of the animation, 0.0 - 1.0
uniform float u_percentage;

// maximum height (attained at start/end of animation), 0.0 - 1.0
uniform float u_jumpHeight;

// time spent on the ground, deforming, 0.0 - 1.0
uniform float u_groundTime;

// maximum percentage deformation (attainted at 0.5), 0.0 - 1.0
uniform vec2 u_maxDeform;

out vec2 v_texCoord;

void main() {
  float airTime = min(u_percentage, 1.0 - u_percentage) * 2.0 / (1.0 - u_groundTime);
  if (airTime < 1.0) {
    // mid air
    float h = (1.0 - airTime * airTime) * u_jumpHeight * 2.0;
    gl_Position = vec4(a_clipCoord.x, a_clipCoord.y - h, 0, 1);
    v_texCoord = vec2(a_texCoord.x, a_texCoord.y);
  } else {
    // on the ground, deforming
    float groundTime = abs(0.5 - u_percentage) * 2.0 / u_groundTime;
    vec2 deformCoef = (1.0 - groundTime * groundTime) * u_maxDeform;
    float y = 1.0 - (1.0 - a_clipCoord.y) * (1.0 - deformCoef.y);
    gl_Position = vec4(a_clipCoord.x, y, 0, 1);

    float offsetX = abs(a_texCoord.x - 0.5) * (1.0 - abs(a_clipCoord.y)) * deformCoef.x;
    float x = a_texCoord.x > 0.5 ? a_texCoord.x - offsetX : a_texCoord.x + offsetX;
    v_texCoord = vec2(x, a_texCoord.y);
  }
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
type Uniform = "u_percentage" | "u_jumpHeight" | "u_groundTime" | "u_maxDeform" | "u_image";

type State =
  | { initialized: false }
  | {
      initialized: true;
      program: Program<Attribute, Uniform>;
      vao: WebGLVertexArrayObject;
    };

let state: State = { initialized: false };

export function init(gl: WebGL2RenderingContext) {
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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
    ["u_percentage", "u_jumpHeight", "u_groundTime", "u_maxDeform", "u_image"],
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
      // a_clipCoord.x, a_clipCoord.y, a_texCoord.x, a_texCoord.y
      0, 0, 0.5, 0.5, // center of triangle fan
      -1, -1, 0, 0, // top-left
      0, -1, 0.5, 0, // top-mid
      1, -1, 1, 0, // top-right
      1, 0, 1, 0.5, // mid-right
      1, 1, 1, 1, // bottom-right
      0, 1, 0.5, 1, // bottom-mid
      -1, 1, 0, 1, // bottom-left
      -1, 0, 0, 0.5, // mid-left
      -1, -1, 0, 0, // top-left
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

const jumpHeightOptions: EditOptionsSlider<"jumpHeight"> = {
  type: "slider",
  label: "Maximum jumping height",
  name: "jumpHeight",
  default: 0.5,
  min: 0,
  max: 1,
  step: 0.05,
} as const;

const groundTimeOptions: EditOptionsSlider<"groundTime"> = {
  type: "slider",
  label: "Time spent on the ground",
  name: "groundTime",
  default: 0.4,
  min: 0,
  max: 1,
  step: 0.05,
} as const;

const maxDeformXOptions: EditOptionsSlider<"maxDeformX"> = {
  type: "slider",
  label: "Maximum horizontal deformation",
  name: "maxDeformX",
  default: 0.25,
  min: 0,
  max: 1,
  step: 0.05,
} as const;

const maxDeformYOptions: EditOptionsSlider<"maxDeformY"> = {
  type: "slider",
  label: "Maximum vertical deformation",
  name: "maxDeformY",
  default: 0.5,
  min: 0,
  max: 1,
  step: 0.05,
} as const;

export const JumpingEditOptions = [
  jumpHeightOptions,
  groundTimeOptions,
  maxDeformXOptions,
  maxDeformYOptions,
];

export type JumpingOptions = MappedOptions<
  typeof JumpingEditOptions,
  "jumping"
>;

export function render(
  gl: WebGL2RenderingContext,
  percentage: number,
  options: JumpingOptions,
) {
  if (!state.initialized) {
    throw new Error("Animation has not been initialized: extreme-speed");
  }
  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.uniform1f(state.program.uniformLocations.u_jumpHeight, options.jumpHeight);
  gl.uniform1f(state.program.uniformLocations.u_groundTime, options.groundTime);
  gl.uniform2f(
    state.program.uniformLocations.u_maxDeform,
    options.maxDeformX,
    options.maxDeformY,
  );
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 10);

  return true;
}
