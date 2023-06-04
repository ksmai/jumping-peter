import { base } from "$app/paths";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
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

  createPositiveInteger({
    name: "shatterPieces",
    value: 10,
  }),

  createPercentage({
    name: "timeBeforeShatter",
    value: 0.5,
  }),

  createPositiveInteger({
    name: "seed",
    value: 0,
  }),

  createPercentage({
    name: "maxHorizontalVelocity",
    value: 1,
  }),

  createPercentage({
    name: "maxVerticalVelocity",
    value: 1,
  }),

  createPercentage({
    name: "maxAngularVelocity",
    value: 0.5,
  }),

  createPercentage({
    name: "maxAcceleration",
    value: 1,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("petrified");
  const geometry = geometryFactory.createGeometry("full");

  const {
    edgeThreshold,
    edgeDarkness,
    shatterPieces,
    timeBeforeShatter,
    seed,
    maxHorizontalVelocity,
    maxVerticalVelocity,
    maxAngularVelocity,
    maxAcceleration,
  } = options;

  return Array(shatterPieces)
    .fill(null)
    .map((_, i) => ({
      program,
      geometry,
      getUniforms(t) {
        const model = transform.identity();

        if (t > timeBeforeShatter) {
          const t2 = (t - timeBeforeShatter) / (1 - timeBeforeShatter);
          let [h, v, g] = utils.noise3D(i + seed * 0.761 + 1);
          let r = utils.noise1D(g);
          h = h * maxHorizontalVelocity;
          v = v * maxVerticalVelocity;
          r = r * 360 * maxAngularVelocity;
          g = g * maxAcceleration;

          transform.rotate2d(model, r * t2);
          transform.translate2d(model, h * t2, v * t2 + 0.5 * g * t2 * t2);
        }

        return {
          u_model: model,
          u_edgeThreshold: edgeThreshold,
          u_edgeDarkness: edgeDarkness,
          u_time: t,
          u_timeBeforeShatter: timeBeforeShatter,
        };
      },
    }));
}
