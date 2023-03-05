import { compileProgram } from "../program";
import type { Program } from "../program";
import type { EditOptionsSlider, MappedOptions } from "../options";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;
uniform float u_minScale;
uniform float u_maxScale;
uniform int u_alternate;

out vec2 v_texCoord;

void main() {
  float scale;
  if (u_alternate == 0) {
    scale = mix(u_minScale, u_maxScale, u_percentage);
  } else if (u_percentage < 0.5) {
    scale = mix(u_minScale, u_maxScale, u_percentage * 2.0);
  } else {
    scale = mix(u_maxScale, u_minScale, u_percentage * 2.0 - 1.0);
  }
  gl_Position = vec4(scale * a_clipCoord, 0.0, 1.0);
  v_texCoord = vec2(a_texCoord.x, a_texCoord.y);
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
type Uniform =
  | "u_percentage"
  | "u_image"
  | "u_minScale"
  | "u_maxScale"
  | "u_alternate";

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
    ["u_percentage", "u_image", "u_minScale", "u_maxScale", "u_alternate"],
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

const minScaleOptions: EditOptionsSlider<"minScale"> = {
  type: "slider",
  label: "Minimum scale",
  name: "minScale",
  default: 1,
  min: 0.1,
  max: 10,
  step: 0.1,
} as const;

const maxScaleOptions: EditOptionsSlider<"maxScale"> = {
  type: "slider",
  label: "Maximum scale",
  name: "maxScale",
  default: 2,
  min: 0.1,
  max: 10,
  step: 0.1,
} as const;

const alternateOptions: EditOptionsSlider<"alternate"> = {
  type: "slider",
  label: "Alterate",
  name: "alternate",
  default: 0,
  min: 0,
  max: 1,
  step: 1,
} as const;

export const ExpandingEditOptions = [
  minScaleOptions,
  maxScaleOptions,
  alternateOptions,
];

export type ExpandingOptions = MappedOptions<
  typeof ExpandingEditOptions,
  "expanding"
>;

export function render(
  gl: WebGL2RenderingContext,
  percentage: number,
  options: ExpandingOptions,
) {
  if (!state.initialized) {
    throw new Error("Animation has not been initialized: expanding");
  }
  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_minScale, options.minScale);
  gl.uniform1f(state.program.uniformLocations.u_maxScale, options.maxScale);
  gl.uniform1i(state.program.uniformLocations.u_alternate, options.alternate);
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 10);

  return true;
}
