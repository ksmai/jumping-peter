import { compileProgram } from "../program";
import type { Program } from "../program";
import type { EditOptionsSlider, MappedOptions } from "../options";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;

uniform float u_minRotateAngle;
uniform float u_maxRotateAngle;
uniform vec2 u_minTranslate;
uniform vec2 u_maxTranslate;

out vec2 v_texCoord;

// https://stackoverflow.com/questions/5149544/can-i-generate-a-random-number-inside-a-pixel-shader
float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float r = random(vec2(u_percentage, u_percentage));
  float angle = radians(mix(u_minRotateAngle, u_maxRotateAngle, r));

  r = random(vec2(r, r));
  if (r < 0.5) {
    angle = -angle;
  }


  float cos_angle = cos(angle);
  float sin_angle = sin(angle);
  mat2 rotationMatrix = mat2(cos_angle, sin_angle, -sin_angle, cos_angle);

  r = random(vec2(r, r));
  vec2 displacement = mix(u_minTranslate, u_maxTranslate, r);

  r = random(vec2(r, r));
  if (r < 0.5) {
    displacement = -displacement;
  }

  mat3 translationMatrix = mat3(
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    displacement.x, displacement.y, 0.0
  );

  gl_Position = vec4(translationMatrix * vec3(rotationMatrix * a_clipCoord, 1.0), 1.0);

  r = random(vec2(r, r));
  bool flip = r < 0.5;
  v_texCoord = vec2(flip ? (1.0 - a_texCoord.x) : a_texCoord.x, a_texCoord.y);
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
  | "u_minRotateAngle"
  | "u_maxRotateAngle"
  | "u_minTranslate"
  | "u_maxTranslate";

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
    ["u_percentage", "u_image", "u_minRotateAngle", "u_maxRotateAngle", "u_minTranslate", "u_maxTranslate"],
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

const minRotateAngleOptions: EditOptionsSlider<"minRotateAngle"> = {
  type: "slider",
  label: "Minimum rotation angle",
  name: "minRotateAngle",
  default: 15,
  min: -360,
  max: 360,
  step: 1,
} as const;

const maxRotateAngleOptions: EditOptionsSlider<"maxRotateAngle"> = {
  type: "slider",
  label: "Maximum rotation angle",
  name: "maxRotateAngle",
  default: 25,
  min: -360,
  max: 360,
  step: 1,
} as const;

const minTranslateXOptions: EditOptionsSlider<"minTranslateX"> = {
  type: "slider",
  label: "Minimum translation (X-axis)",
  name: "minTranslateX",
  default: 0,
  min: 0,
  max: 1,
  step: 0.01,
} as const;

const maxTranslateXOptions: EditOptionsSlider<"maxTranslateX"> = {
  type: "slider",
  label: "Maximum translation (X-axis)",
  name: "maxTranslateX",
  default: 0.1,
  min: 0,
  max: 1,
  step: 0.01,
} as const;

const minTranslateYOptions: EditOptionsSlider<"minTranslateY"> = {
  type: "slider",
  label: "Minimum translation (Y-axis)",
  name: "minTranslateY",
  default: 0,
  min: 0,
  max: 1,
  step: 0.01,
} as const;

const maxTranslateYOptions: EditOptionsSlider<"maxTranslateY"> = {
  type: "slider",
  label: "Maximum translation (Y-axis)",
  name: "maxTranslateY",
  default: 0.1,
  min: 0,
  max: 1,
  step: 0.01,
} as const;

export const ExcitedEditOptions = [
  minRotateAngleOptions,
  maxRotateAngleOptions,
  minTranslateXOptions,
  maxTranslateXOptions,
  minTranslateYOptions,
  maxTranslateYOptions,
];

export type ExcitedOptions = MappedOptions<
  typeof ExcitedEditOptions,
  "excited"
>;

export function render(
  gl: WebGL2RenderingContext,
  percentage: number,
  options: ExcitedOptions,
) {
  if (!state.initialized) {
    throw new Error("Animation has not been initialized: excited");
  }
  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_minRotateAngle, options.minRotateAngle);
  gl.uniform1f(state.program.uniformLocations.u_maxRotateAngle, options.maxRotateAngle);
  gl.uniform2f(state.program.uniformLocations.u_minTranslate, options.minTranslateX, options.minTranslateY);
  gl.uniform2f(state.program.uniformLocations.u_maxTranslate, options.maxTranslateX, options.maxTranslateY);
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 10);

  return true;
}
