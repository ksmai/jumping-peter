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
  const program = programFactory.createProgram("default3d");
  const geometry = geometryFactory.createGeometry("full");

  const { axisX, axisY, axisZ, originX, originY, easing, alternates } = options;
  const axis: [number, number, number] = [axisX, axisY, axisZ];
  const ease = utils.makeEaseInOutPower(easing);

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = alternates ? Math.min(t, 1 - t) * 2 : t;
    const p = ease(t2);
    const angle = utils.interpolate(0, 360, p);
    const u_model = transform.identity();
    transform.translate2d(u_model, -originX, -originY);
    transform.rotate3d(u_model, angle, axis);
    transform.translate2d(u_model, originX, originY);

    const u_view = transform.identity();
    transform.view(u_view, [0, 0, 3], [0, 0, -1], [0, 1, 0]);

    const u_projection = transform.identity();
    transform.perspective(u_projection, -0.03, 0.03, -0.03, 0.03, 0.1, 6);

    return {
      u_model,
      u_view,
      u_projection,
      "u_material.specular": [1, 1, 1],
      "u_material.shininess": 100,
      "u_directionalLight.ambient": [0.6, 0.6, 0.6],
      "u_directionalLight.diffuse": [1, 1, 1],
      "u_directionalLight.specular": [1, 1, 1],
      "u_directionalLight.direction": [-1, -1, -5],
      "u_pointLight.ambient": [0, 0, 0],
      "u_pointLight.diffuse": [0, 0, 0],
      "u_pointLight.specular": [0, 0, 0],
      "u_pointLight.position": [0, 0, 0],
      "u_pointLight.attenuation1": 0.2,
      "u_pointLight.attenuation2": 0.1,
      "u_spotLight.ambient": [0, 0, 0],
      "u_spotLight.diffuse": [0, 0, 0],
      "u_spotLight.specular": [0, 0, 0],
      "u_spotLight.position": [0, 0, 0],
      "u_spotLight.direction": [0, 0, -1],
      "u_spotLight.innerCos": Math.cos(utils.toRadian(5)),
      "u_spotLight.outerCos": Math.cos(utils.toRadian(15)),
      "u_spotLight.attenuation1": 0.2,
      "u_spotLight.attenuation2": 0.1,
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
