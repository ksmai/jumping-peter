import { createPercentage } from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "panic" as const;

export const frameOptions = {
  delayMs: 30,
  totalFrames: 16,
};

export const editOptions = [
  createPercentage({
    name: "maxOffsetX",
    value: 0.15,
  }),

  createPercentage({
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
      u_world: mat,
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
