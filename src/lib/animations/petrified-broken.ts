import { base } from "$app/paths";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import { defaults, createPositiveInteger, createPercentage } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "petrified-broken" as const;

export const defaultOptions = {
  ...defaults,
  additionalImages: {
    urls: [`${base}/stone.jpg`],
  },
  output: {
    ...defaults.output,
    delayMs: 150,
    totalFrames: 20,
  },
};

export const editOptions = [
  createPercentage({
    name: "edgeThreshold",
    value: 0.2,
  }),

  createPercentage({
    name: "edgeDarkness",
    value: 0.3,
  }),

  createPercentage({
    name: "timeBeforeBreak",
    value: 0.4,
  }),

  createPercentage({
    name: "timeBeforeFall",
    value: 0.2,
  }),

  createPositiveInteger({
    name: "seed",
    value: 26,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("petrifiedBroken");
  const geometry = geometryFactory.createGeometry("full");

  const { edgeThreshold, edgeDarkness, timeBeforeBreak, timeBeforeFall, seed } =
    options;

  return Array(2)
    .fill(null)
    .map((_, i) => ({
      program,
      geometry,
      getUniforms(t) {
        const model = transform.identity();

        const timeForFall = 1 - timeBeforeBreak - timeBeforeFall;
        if (t > 1 - timeForFall) {
          const finalAngle = utils.noise1D(i + seed * 0.761 + 1) * 10 + 80;
          const t2 = (t - 1 + timeForFall) / timeForFall;
          transform.translate2d(model, 0, 1);
          transform.rotate2d(
            model,
            utils.easeOutQuad(t2) * finalAngle * (1 - i * 2),
          );
          transform.translate2d(model, 0, -1);
        }

        return {
          u_model: model,
          u_edgeThreshold: edgeThreshold,
          u_edgeDarkness: edgeDarkness,
          u_seed: seed,
          u_time: t,
          u_timeBeforeBreak: timeBeforeBreak,
          u_timeBeforeFall: timeBeforeFall,
          u_numTurns: 3,
          u_i: i,
        };
      },
    }));
}
