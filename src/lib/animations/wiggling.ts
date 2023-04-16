import * as transform from "../graphics/transform";
import { defaults, createPositiveInteger, createOffset } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "wiggling" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 15,
  },
};

export const editOptions = [
  createPositiveInteger({
    name: "frequency",
    value: 3,
  }),

  createOffset({
    name: "amplitude",
    value: 0.05,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("wiggling");
  const geometry = geometryFactory.createGeometry("full");

  const { frequency, amplitude } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    return {
      u_model: mat,
      u_time: t,
      u_amplitude: amplitude,
      u_frequency: frequency,
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
