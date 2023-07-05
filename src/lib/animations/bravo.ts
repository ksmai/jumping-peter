import * as transform from "../graphics/transform";
import {
  defaults,
  createPercentage,
  createCoordinate,
  createTwoWayOffset,
  createOffset,
} from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "bravo" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 45,
    totalFrames: 20,
  },
};

export const editOptions = [
  createCoordinate({
    name: "normalX",
    value: 1,
  }),
  createCoordinate({
    name: "normalY",
    value: 1,
  }),
  createTwoWayOffset({
    name: "startDist",
    value: -1.6,
  }),
  createTwoWayOffset({
    name: "endDist",
    value: 1.6,
  }),
  createOffset({
    name: "blur",
    value: 0.7,
  }),
  createPercentage({
    name: "lightness",
    value: 0.7,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("bravo");
  const geometry = geometryFactory.createGeometry("full");

  const { normalX, normalY, startDist, endDist, blur, lightness } = options;

  return [
    {
      program,
      geometry,
      getUniforms(t) {
        const model = transform.identity();

        return {
          u_model: model,
          u_time: t,
          u_normal: [normalX, normalY],
          u_startDist: startDist,
          u_endDist: endDist,
          u_blur: blur,
          u_lightness: lightness,
        };
      },
    },
  ];
}
