import { glMatrix, mat2d, vec2 } from "gl-matrix";

import { createAngle, createCoordinate, type MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "excited" as const;
export type Name = typeof Name;

export const EditOptions = [
  createAngle({
    name: "minAngle",
    label: "Min angle",
    default: 15,
  } as const),

  createAngle({
    name: "maxAngle",
    label: "Max angle",
    default: 25,
  } as const),

  createCoordinate({
    name: "minCenterX",
    label: "Min center X",
    default: 0.5,
  } as const),

  createCoordinate({
    name: "maxCenterX",
    label: "Max center X",
    default: 0.55,
  } as const),

  createCoordinate({
    name: "minCenterY",
    label: "Min center Y",
    default: 0.5,
  } as const),

  createCoordinate({
    name: "maxCenterY",
    label: "Max center Y",
    default: 0.55,
  } as const),
];

export type RenderOption = MappedOptions<typeof EditOptions, Name>;

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: RenderOption,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("full");

  let { minAngle, maxAngle, minCenterX, maxCenterX, minCenterY, maxCenterY } =
    options;
  minAngle = glMatrix.toRadian(minAngle);
  maxAngle = glMatrix.toRadian(maxAngle);
  minCenterX = minCenterX * 2 - 1;
  minCenterY = minCenterY * 2 - 1;
  maxCenterX = maxCenterX * 2 - 1;
  maxCenterY = maxCenterY * 2 - 1;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    let angle = minAngle + (maxAngle - minAngle) * Math.random();
    if (Math.random() < 0.5) {
      angle = -angle;
    }

    const translate = vec2.lerp(
      vec2.create(),
      [minCenterX, minCenterY],
      [maxCenterX, maxCenterY],
      Math.random(),
    );
    if (Math.random() < 0.5) {
      vec2.negate(translate, translate);
    }

    const scale =
      Math.random() < 0.5 ? vec2.fromValues(-1, 1) : vec2.fromValues(1, 1);

    const transform = mat2d.create();
    mat2d.scale(transform, transform, scale);
    mat2d.translate(transform, transform, translate);
    mat2d.rotate(transform, transform, angle);

    return {
      // prettier-ignore
      u_transform: [
        transform[0], transform[1], 0,
        transform[2], transform[3], 0,
        transform[4], transform[5], 1,
      ],
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
