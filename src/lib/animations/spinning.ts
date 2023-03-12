import { compileProgram } from "../program";
import type { Program } from "../program";
import type { EditOptionsSlider, MappedOptions } from "../options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
in vec2 a_texCoord;

uniform float u_percentage;

uniform float u_startAngle;
uniform float u_endAngle;

uniform int u_alternate;
uniform vec2 u_origin;

out vec2 v_texCoord;

void main() {
  float angle;
  if (u_alternate == 0) {
    angle = radians(mix(u_startAngle, u_endAngle, u_percentage));
  } else if (u_percentage < 0.5) {
    angle = radians(mix(u_startAngle, u_endAngle, u_percentage * 2.0));
  } else {
    angle = radians(mix(u_endAngle, u_startAngle, u_percentage * 2.0 - 1.0));
  }

  float cos_angle = cos(angle);
  float sin_angle = sin(angle);
  mat2 rotationMatrix = mat2(cos_angle, sin_angle, -sin_angle, cos_angle);
  gl_Position = vec4(rotationMatrix * (a_clipCoord - u_origin) + u_origin, 0.0, 1.0);
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
  | "u_startAngle"
  | "u_endAngle"
  | "u_alternate"
  | "u_origin";

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
    [
      "u_percentage",
      "u_image",
      "u_startAngle",
      "u_endAngle",
      "u_alternate",
      "u_origin",
    ],
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

const startAngleOptions: EditOptionsSlider<"startAngle"> = {
  type: "slider",
  label: "Starting angle",
  name: "startAngle",
  default: 0,
  min: -360,
  max: 360,
  step: 1,
} as const;

const endAngleOptions: EditOptionsSlider<"endAngle"> = {
  type: "slider",
  label: "Ending angle",
  name: "endAngle",
  default: 360,
  min: -360,
  max: 360,
  step: 1,
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

const originXOptions: EditOptionsSlider<"originX"> = {
  type: "slider",
  label: "Rotation origin (X-axis)",
  name: "originX",
  default: 0,
  min: -1,
  max: 1,
  step: 0.01,
} as const;

const originYOptions: EditOptionsSlider<"originY"> = {
  type: "slider",
  label: "Rotation origin (Y-axis)",
  name: "originY",
  default: 0,
  min: -1,
  max: 1,
  step: 0.01,
} as const;

export const SpinningEditOptions = [
  startAngleOptions,
  endAngleOptions,
  alternateOptions,
  originXOptions,
  originYOptions,
];

export type SpinningOptions = MappedOptions<
  typeof SpinningEditOptions,
  "spinning"
>;

export function render(
  gl: WebGL2RenderingContext,
  percentage: number,
  options: SpinningOptions,
) {
  if (!state.initialized) {
    throw new Error("Animation has not been initialized: spinning");
  }
  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_startAngle, options.startAngle);
  gl.uniform1f(state.program.uniformLocations.u_endAngle, options.endAngle);
  gl.uniform1i(state.program.uniformLocations.u_alternate, options.alternate);
  gl.uniform2f(
    state.program.uniformLocations.u_origin,
    options.originX,
    options.originY,
  );
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 10);

  return true;
}

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: SpinningOptions,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  return [
    {
      program,
      geometry,
      getUniforms(t: number) {
        const angle = t * 2 * Math.PI;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
          u_transform: [cos, sin, 0, -sin, cos, 0, 0, 0, 0],
        };
      },
    },
  ];
}
