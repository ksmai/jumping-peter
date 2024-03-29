import { createPercentage, createAngle, defaults } from "./options";
import type { MappedOptions } from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "tower" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 40,
    totalFrames: 20,
  },
};

export const editOptions = [
  createAngle({
    name: "startAngle",
    value: 20,
  }),

  createAngle({
    name: "endAngle",
    value: -45,
  }),

  createPercentage({
    name: "startTime",
    value: 0.5,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("tower");

  const { startAngle, endAngle, startTime } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();

    if (t < startTime) {
      const cycleT = t / startTime;
      const rotateT = Math.min(cycleT, 1 - cycleT) * 2;
      const angle = utils.interpolate(0, startAngle, rotateT);
      transform.rotate2d(mat, angle);
    } else {
      const cycleT = (t - startTime) / (1 - startTime);
      const rotateT = Math.min(cycleT, 1 - cycleT) * 2;
      const angle = utils.interpolate(0, endAngle, rotateT);
      transform.rotate2d(mat, angle);

      if (cycleT > 0.5) {
        const radian = utils.toRadian(angle);
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        const translateT = (cycleT - 0.5) * 2;
        const translateX = utils.interpolate(0, -2 * sin, translateT);
        const translateY = utils.interpolate(0, 2 * cos, translateT);
        transform.translate2d(mat, translateX, translateY);
      }
    }

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
