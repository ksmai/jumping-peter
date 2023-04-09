import {
  createCoordinate,
  createEasing,
  createToggle,
  defaults,
} from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "rotating" as const;

export const defaultOptions = {
  ...defaults,
  output: {
    ...defaults.output,
    delayMs: 40,
    totalFrames: 25,
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
  material: {
    specular: [1, 1, 1],
    shininess: 100,
  },
  directionalLight: {
    ambient: [0.6, 0.6, 0.6],
    diffuse: [1, 1, 1],
    specular: [1, 1, 1],
    direction: [-1, -1, -5],
  },
} as const;

export const editOptions = [
  createCoordinate({
    name: "axisX",
    value: 0,
  }),

  createCoordinate({
    name: "axisY",
    value: 1,
  }),

  createCoordinate({
    name: "axisZ",
    value: 0,
  }),

  createCoordinate({
    name: "originX",
    value: 0,
  }),

  createCoordinate({
    name: "originY",
    value: 0,
  }),

  createEasing({
    name: "easing",
    value: 1,
  }),

  createToggle({
    name: "alternates",
    value: false,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  const { axisX, axisY, axisZ, originX, originY, easing, alternates } = options;
  const axis: [number, number, number] = [axisX, axisY, axisZ];
  const ease = utils.makeEaseInOutPower(easing);

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = alternates ? Math.min(t, 1 - t) * 2 : t;
    const p = ease(t2);
    const angle = utils.interpolate(0, 360, p);
    const mat = transform.identity();
    transform.translate2d(mat, -originX, -originY);
    transform.rotate3d(mat, angle, axis);
    transform.translate2d(mat, originX, originY);

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
