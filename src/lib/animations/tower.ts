import * as mat2d from "./matrix2d";
import * as utils from "./utils";
import { createPercentage, createAngle } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "tower" as const;
export type Name = typeof Name;

export const FrameOptions = {
  delayMs: 40,
  totalFrames: 20,
} as const;

export const EditOptions = [
  createAngle({
    name: "startAngle",
    value: 20,
  } as const),

  createAngle({
    name: "endAngle",
    value: -45,
  } as const),

  createPercentage({
    name: "startTime",
    value: 0.5,
  } as const),
];

export type RenderOption = MappedOptions<typeof EditOptions, Name>;

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: RenderOption,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("tower");

  const { startAngle, endAngle, startTime } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const mat = mat2d.identity();

    if (t < startTime) {
      const cycleT = t / startTime;
      const rotateT = Math.min(cycleT, 1 - cycleT) * 2;
      const angle = utils.interpolate(0, startAngle, rotateT);
      mat2d.rotate(mat, angle);
    } else {
      const cycleT = (t - startTime) / (1 - startTime);
      const rotateT = Math.min(cycleT, 1 - cycleT) * 2;
      const angle = utils.interpolate(0, endAngle, rotateT);
      mat2d.rotate(mat, angle);

      if (cycleT > 0.5) {
        const radian = utils.toRadian(angle);
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        const translateT = (cycleT - 0.5) * 2;
        const translateX = utils.interpolate(0, -2 * sin, translateT);
        const translateY = utils.interpolate(0, 2 * cos, translateT);
        mat2d.translate(mat, translateX, translateY);
      }
    }

    return {
      u_transform: mat2d.toTransform(mat),
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
