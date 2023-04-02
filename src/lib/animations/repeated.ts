import * as transform from "./transform";
import * as utils from "./utils";
import { createScale } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "repeated" as const;

export const frameOptions = {
  delayMs: 60,
  totalFrames: 15,
};

export const editOptions = [
  createScale({
    name: "initialScale",
    value: 0.1,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const full = geometryFactory.createGeometry("full");
  const topHalf = geometryFactory.createGeometry("topHalf");
  const bottomHalf = geometryFactory.createGeometry("bottomHalf");

  const { initialScale } = options;

  const getFullUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const scale = utils.interpolate(initialScale, 1, p);
    transform.scale2d(mat, scale, scale);
    return {
      u_transform: mat,
    };
  };

  const getTopHalfUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const offset = utils.interpolate(0, 1, p);
    transform.translate2d(mat, 0, offset);
    return {
      u_transform: mat,
    };
  };

  const getBottomHalfUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const offset = utils.interpolate(0, -1, p);
    transform.translate2d(mat, 0, offset);
    return {
      u_transform: mat,
    };
  };

  return [
    {
      program,
      geometry: full,
      getUniforms: getFullUniforms,
    },
    {
      program,
      geometry: topHalf,
      getUniforms: getTopHalfUniforms,
    },
    {
      program,
      geometry: bottomHalf,
      getUniforms: getBottomHalfUniforms,
    },
  ];
}
