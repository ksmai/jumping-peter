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
  const program = programFactory.createProgram("default3d");
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
    const u_model = transform.identity();
    transform.rotate2d(u_model, angle);
    transform.translate2d(u_model, 0, offset);
    transform.rotate3d(u_model, currentAngle, [0, 1, 0]);

    const u_view = transform.identity();
    transform.view(u_view, [0, 0, 3], [0, 0, -1], [0, 1, 0]);

    const u_projection = transform.identity();
    transform.perspective(u_projection, -0.03, 0.03, -0.03, 0.03, 0.1, 6);

    return {
      u_model,
      u_view,
      u_projection,
      "u_material.specular": [0, 0, 0],
      "u_material.shininess": 32,
      "u_directionalLight.ambient": [1, 1, 1],
      "u_directionalLight.diffuse": [0, 0, 0],
      "u_directionalLight.specular": [0, 0, 0],
      "u_directionalLight.direction": [0, -1, -1],
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
