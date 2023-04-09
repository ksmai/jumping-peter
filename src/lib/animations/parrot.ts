import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import { createScale, createOffset, defaults } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "parrot" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 20,
    totalFrames: 18,
  },
};

export const editOptions = [
  createScale({
    name: "amplitudeX",
    value: 0.6,
  }),

  createOffset({
    name: "amplitudeY",
    value: 0.5,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { amplitudeX, amplitudeY } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = Math.cos(t * 2 * Math.PI) * 0.5 + 0.5;
    const sheer = utils.interpolate(-amplitudeX, amplitudeX, t2);
    const t3 = Math.sin(t * 2 * Math.PI) * 0.5 + 0.5;
    const offset = utils.interpolate(-amplitudeY, 0, t3);
    const mat = transform.identity();
    transform.translate2d(mat, 0, 1);
    transform.sheer2d(mat, sheer, 0);
    transform.translate2d(mat, 0, -1 + offset);
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
