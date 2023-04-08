import {
  createCoordinate,
  createEasing,
  createPercentage,
  createToggle,
} from "./options";
import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "rotating" as const;

export const frameOptions = {
  delayMs: 50,
  totalFrames: 20,
};

export const editOptions = [
  createPercentage({
    name: "axisX",
    value: 0,
  }),

  createPercentage({
    name: "axisY",
    value: 1,
  }),

  createPercentage({
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
    const world = transform.identity();
    transform.translate2d(world, -originX, -originY);
    transform.rotate3d(world, angle, axis);
    transform.translate2d(world, originX, originY);

    const viewProjection = transform.identity();
    transform.view(viewProjection, [0, 0, 5], [0, 0, 0]);
    transform.perspective(viewProjection, -0.2, 0.2, -0.2, 0.2, 1, 9);

    return {
      u_model: world,
      u_viewProjection: viewProjection,
      u_directionalLighting: true,
      u_lightDirection: [0, 0, -1],
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
