import { base } from "$app/paths";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import {
  defaults,
  createPositiveInteger,
  createPercentage,
  createTwoWayPercentage,
} from "./options";
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
    name: "timeBeforeCrack",
    value: 0.4,
  }),

  createPercentage({
    name: "timeBeforeBreak",
    value: 0.6,
  }),

  createPositiveInteger({
    name: "crackSegments",
    value: 4,
  }),

  createTwoWayPercentage({
    name: "maxCrackMovement",
    value: 0.2,
  }),

  createPercentage({
    name: "crackWidth",
    value: 0.1,
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

  const {
    edgeThreshold,
    edgeDarkness,
    timeBeforeCrack,
    timeBeforeBreak,
    crackSegments,
    maxCrackMovement,
    crackWidth,
    seed,
  } = options;

  return Array(2)
    .fill(null)
    .map((_, i) => ({
      program,
      geometry,
      getUniforms(t) {
        const model = transform.identity();

        if (t > timeBeforeBreak) {
          const finalAngle = utils.noise1D(i + seed * 0.761 + 1) * 10 + 80;
          const t2 = (t - timeBeforeBreak) / (1 - timeBeforeBreak);
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
          u_timeBeforeCrack: timeBeforeCrack,
          u_timeBeforeBreak: timeBeforeBreak,
          u_crackSegments: crackSegments,
          u_maxCrackMovement: maxCrackMovement,
          u_crackWidth: crackWidth,
          u_i: i,
        };
      },
    }));
}
