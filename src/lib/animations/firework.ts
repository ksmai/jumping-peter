import * as transform from "../graphics/transform";
import { defaults, createPositiveInteger, createPercentage } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "firework" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 50,
    totalFrames: 30,
  },
};

export const editOptions = [
  createPositiveInteger({
    name: "seed",
    value: 10,
  }),
  createPercentage({
    name: "darkness",
    value: 0.3,
  }),
  createPositiveInteger({
    name: "cycles",
    value: 2,
  }),
  createPositiveInteger({
    name: "speedModifier",
    value: 13,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("firework");
  const geometry = geometryFactory.createGeometry("full");

  const { seed, darkness, cycles, speedModifier } = options;

  return [
    {
      program,
      geometry,
      getUniforms(t) {
        const model = transform.identity();

        return {
          u_model: model,
          u_seed: seed,
          u_time: t,
          u_darkness: darkness,
          u_cycles: cycles,
          u_speedModifier: speedModifier,
        };
      },
    },
  ];
}
