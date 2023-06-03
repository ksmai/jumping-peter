import { base } from "$app/paths";
import * as transform from "../graphics/transform";
import { defaults, createPositiveInteger, createPercentage } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "petrified" as const;

export const defaultOptions = {
  ...defaults,
  additionalImages: {
    urls: [`${base}/stone.jpg`],
  },
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 15,
  },
};

export const editOptions = [
  createPositiveInteger({
    name: "shatterPieces",
    value: 10,
  }),

  createPercentage({
    name: "timeBeforeShatter",
    value: 0.5,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("petrified");
  const geometry = geometryFactory.createGeometry("full");

  const { shatterPieces, timeBeforeShatter } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    return {
      u_model: mat,
      u_time: t,
      u_shatter_pieces: shatterPieces,
      u_time_before_shatter: timeBeforeShatter,
      u_kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1],
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
