import { mat2d, vec2 } from "gl-matrix";

import { createDirection, type MappedOptions } from "../options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "extreme-speed" as const;
export type Name = typeof Name;

export const EditOptions = [
  createDirection({
    name: "directionX",
    label: "Horizontal direction",
    default: -1,
  } as const),

  createDirection({
    name: "directionY",
    label: "Vertical direction",
    default: 0,
  } as const),
];

export type RenderOption = MappedOptions<typeof EditOptions, Name>;

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: RenderOption,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("nine");

  let { directionX, directionY } = options;
  directionX *= 2;
  directionY *= 2;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const transform = mat2d.create();
    mat2d.translate(
      transform,
      transform,
      vec2.lerp(vec2.create(), [0, 0], [directionX, directionY], t),
    );
    mat2d.scale(transform, transform, [3, 3]);
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
