import { glMatrix, mat2d } from "gl-matrix";

import {
  createAngle,
  createToggle,
  createCoordinate,
  type MappedOptions,
} from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "spinning" as const;
export type Name = typeof Name;

export const EditOptions = [
  createAngle({
    name: "startAngle",
    default: 0,
  } as const),

  createAngle({
    name: "endAngle",
    default: 360,
  } as const),

  createToggle({
    name: "alternate",
    default: false,
  } as const),

  createCoordinate({
    name: "originX",
    default: 0.5,
  } as const),

  createCoordinate({
    name: "originY",
    default: 0.5,
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

  const { alternate } = options;
  let { startAngle, endAngle, originX, originY } = options;
  startAngle = glMatrix.toRadian(startAngle);
  endAngle = glMatrix.toRadian(endAngle);
  originX = originX * 2 - 1;
  originY = originY * 2 - 1;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    if (alternate && t > 0.5) {
      return getUniforms(1 - t);
    }
    const angle =
      startAngle + (endAngle - startAngle) * t * (alternate ? 2 : 1);
    const transform = mat2d.create();
    mat2d.translate(transform, transform, [originX, originY]);
    mat2d.rotate(transform, transform, angle);
    mat2d.translate(transform, transform, [-originX, -originY]);
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
