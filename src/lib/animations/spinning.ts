import * as mat2d from "./matrix2d";
import * as utils from "./utils";
import { createAngle, createToggle, createCoordinate } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "spinning" as const;
export type Name = typeof Name;

export const FrameOptions = {
  delayMs: 50,
  totalFrames: 15,
};

export const EditOptions = [
  createAngle({
    name: "startAngle",
    value: 0,
  }),

  createAngle({
    name: "endAngle",
    value: 360,
  }),

  createCoordinate({
    name: "originX",
    value: 0,
  }),

  createCoordinate({
    name: "originY",
    value: 0,
  }),

  createToggle({
    name: "alternates",
    value: false,
  }),
];

export type RenderOption = MappedOptions<typeof EditOptions, Name>;

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: RenderOption,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { alternates, startAngle, endAngle, originX, originY } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = alternates ? Math.min(t, 1 - t) * 2 : t;
    const angle = utils.interpolate(startAngle, endAngle, cycleT);
    const mat = mat2d.identity();
    mat2d.translate(mat, -originX, -originY);
    mat2d.rotate(mat, angle);
    mat2d.translate(mat, originX, originY);
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
