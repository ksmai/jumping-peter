import { createAngle, createTwoWayOffset, defaults } from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "party" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 40,
    totalFrames: 15,
  },
  camera: {
    position: [0, 0, 3],
    lookAt: [0, 0, -1],
    up: [0, 1, 0],
  },
  projection: {
    perspective: true,
    left: -0.03,
    right: 0.03,
    bottom: -0.03,
    top: 0.03,
    near: 0.1,
    far: 6,
  },
} as const;

export const editOptions = [
  createAngle({
    name: "angle",
    value: 10,
  }),

  createTwoWayOffset({
    name: "startOffset",
    value: -0.3,
  }),

  createTwoWayOffset({
    name: "endOffset",
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

  const { angle, startOffset, endOffset } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = (2 * t) % 1;
    const t3 = Math.min(t2, 1 - t2) * 2;
    const p2 = utils.easeInOutCubic(t2);
    const p3 = utils.easeOutQuad(t3);
    const currentAngle =
      t < 0.5 ? utils.interpolate(0, 180, p2) : utils.interpolate(180, 360, p2);
    const offset = utils.interpolate(startOffset, endOffset, p3);
    const mat = transform.identity();
    transform.rotate2d(mat, angle);
    transform.translate2d(mat, 0, offset);
    transform.rotate3d(mat, currentAngle, [0, 1, 0]);

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
