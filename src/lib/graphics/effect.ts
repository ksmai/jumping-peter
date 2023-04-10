import type { ProgramFactory, ProgramType } from "./program";
import type { Effect } from "./renderer";

export const EFFECTS = ["invert"] as const;

export type EffectType = (typeof EFFECTS)[number];

const EffectConfig: Record<
  EffectType,
  { program: ProgramType; uniforms: Record<string, unknown> }
> = {
  invert: {
    program: "invert",
    uniforms: {},
  },
} as const;

export function createEffects(
  programFactory: ProgramFactory,
  types: EffectType[],
): Effect[] {
  return types.map((type) => ({
    program: programFactory.createProgram(EffectConfig[type].program),
    uniforms: EffectConfig[type].uniforms,
  }));
}
