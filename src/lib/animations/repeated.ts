import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import { createScale, createToggle } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "repeated" as const;

export const frameOptions = {
  delayMs: 60,
  totalFrames: 15,
};

export const editOptions = [
  createScale({
    name: "initialScale",
    value: 0.1,
  }),

  createToggle({
    name: "horizontal",
    value: false,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const full = geometryFactory.createGeometry("full");

  const { initialScale, horizontal } = options;

  const firstHalf = horizontal
    ? {
        geometry: geometryFactory.createGeometry("leftHalf"),
        endX: -1,
        endY: 0,
      }
    : {
        geometry: geometryFactory.createGeometry("topHalf"),
        endX: 0,
        endY: 1,
      };

  const secondHalf = horizontal
    ? {
        geometry: geometryFactory.createGeometry("rightHalf"),
        endX: 1,
        endY: 0,
      }
    : {
        geometry: geometryFactory.createGeometry("bottomHalf"),
        endX: 0,
        endY: -1,
      };

  const getFullUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const scale = utils.interpolate(initialScale, 1, p);
    transform.scale2d(mat, scale, scale);
    return {
      u_model: mat,
    };
  };

  const getFirstHalfUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const offsetX = utils.interpolate(0, firstHalf.endX, p);
    const offsetY = utils.interpolate(0, firstHalf.endY, p);
    transform.translate2d(mat, offsetX, offsetY);
    return {
      u_model: mat,
    };
  };

  const getSecondHalfUniforms: Sprite["getUniforms"] = (t) => {
    const mat = transform.identity();
    const p = utils.easeInOutCubic(t);
    const offsetX = utils.interpolate(0, secondHalf.endX, p);
    const offsetY = utils.interpolate(0, secondHalf.endY, p);
    transform.translate2d(mat, offsetX, offsetY);
    return {
      u_model: mat,
    };
  };

  return [
    {
      program,
      geometry: full,
      getUniforms: getFullUniforms,
    },
    {
      program,
      geometry: firstHalf.geometry,
      getUniforms: getFirstHalfUniforms,
    },
    {
      program,
      geometry: secondHalf.geometry,
      getUniforms: getSecondHalfUniforms,
    },
  ];
}
