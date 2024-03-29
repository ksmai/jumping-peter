import * as transform from "../graphics/transform";
import { createOffset, createPercentage, defaults } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "jumping" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 20,
  },
};

export const editOptions = [
  createOffset({
    name: "maxOffset",
    value: 1.2,
  }),

  createPercentage({
    name: "compressTime",
    value: 0.4,
  }),

  createPercentage({
    name: "maxCompress",
    value: 0.3,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { maxOffset, compressTime, maxCompress } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = Math.min(t, 1 - t) * 2;
    const mat = transform.identity();
    const airTime = cycleT / (1 - compressTime);
    if (airTime < 1) {
      const offset = (1 - airTime * airTime) * maxOffset;
      transform.translate2d(mat, 0, offset);
    } else {
      const groundTime = (1 - cycleT) / compressTime;
      const compressAmount = (1 - groundTime * groundTime) * maxCompress;
      const deform = 1 - compressAmount;
      transform.translate2d(mat, 0, 1);
      transform.scale2d(mat, 1 / deform, deform);
      transform.translate2d(mat, 0, -1);
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
