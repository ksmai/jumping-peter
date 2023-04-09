import { createOffset, defaults } from "./options";
import type { MappedOptions } from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "panic" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 30,
    totalFrames: 16,
  },
};

export const editOptions = [
  createOffset({
    name: "maxOffsetX",
    value: 0.15,
  }),

  createOffset({
    name: "maxOffsetY",
    value: 0.15,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { maxOffsetX, maxOffsetY } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const px = utils.random(t + 0.123);
    const py = utils.random(t * 2 + 1);
    const offsetX = utils.interpolate(-maxOffsetX, maxOffsetX, px);
    const offsetY = utils.interpolate(-maxOffsetY, maxOffsetY, py);
    const mat = transform.identity();
    transform.translate2d(mat, offsetX, offsetY);
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
