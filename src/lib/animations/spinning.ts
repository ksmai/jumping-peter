import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import {
  createAngle,
  createToggle,
  createCoordinate,
  defaults,
} from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "spinning" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 15,
  },
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
    const mat = transform.identity();
    transform.translate2d(mat, -originX, -originY);
    transform.rotate2d(mat, angle);
    transform.translate2d(mat, originX, originY);
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
