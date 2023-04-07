import * as transform from "./transform";
import * as utils from "./utils";
import { createDirection } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "extreme-speed" as const;

export const frameOptions = {
  delayMs: 20,
  totalFrames: 10,
};

export const editOptions = [
  createDirection({
    name: "directionX",
    value: -1,
  }),

  createDirection({
    name: "directionY",
    value: 0,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("2d");
  const geometry = geometryFactory.createGeometry("sudoku");

  const { directionX, directionY } = options;
  const maxOffsetX = directionX * 2;
  const maxOffsetY = directionY * 2;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const translateX = utils.interpolate(0, maxOffsetX, t);
    const translateY = utils.interpolate(0, maxOffsetY, t);
    transform.translate2d(mat, translateX, translateY);
    return {
      u_transform: mat,
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
