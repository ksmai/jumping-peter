import {
  createAngle,
  createPositiveInteger,
  createTwoWayPercentage,
  defaults,
} from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "excited" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 25,
  },
};

export const editOptions = [
  createAngle({
    name: "angle",
    value: 15,
  }),

  createTwoWayPercentage({
    name: "startOffset",
    value: -0.1,
  }),

  createTwoWayPercentage({
    name: "endOffset",
    value: 0.1,
  }),

  createPositiveInteger({
    name: "cycles",
    value: 3,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { angle, cycles } = options;
  let { startOffset, endOffset } = options;
  startOffset *= 2;
  endOffset *= 2;

  const radians = utils.toRadian(angle);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = (t * 2 * cycles) % 1;
    const translateT = Math.min(cycleT, 1 - cycleT) * 2;
    const translateX = utils.interpolate(
      -startOffset * sin,
      -endOffset * sin,
      translateT,
    );
    const translateY = utils.interpolate(
      startOffset * cos,
      endOffset * cos,
      translateT,
    );

    const mat = transform.identity();
    transform.rotate2d(mat, angle);
    transform.translate2d(mat, translateX, translateY);
    transform.scale2d(mat, t > 0.5 ? -1 : 1, 1);

    return {
      u_model: mat,
    };
  };

  return [
    {
      program,
      geometry,
      getUniforms,
    },
  ];
}
