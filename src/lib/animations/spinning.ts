import * as mat2d from "./matrix2d";
import * as utils from "./utils";
import { createAngle, createToggle, createCoordinate } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "spinning" as const;

export const frameOptions = {
  delayMs: 50,
  totalFrames: 15,
};

export const editOptions = [
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

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
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
