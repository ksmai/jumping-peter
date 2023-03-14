import { mat2d } from "gl-matrix";

import { createCoordinate, type MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "jumping" as const;
export type Name = typeof Name;

export const EditOptions = [
  createCoordinate({
    name: "jumpHeight",
    label: "Maximum height attained at the start/end of the jumping",
    default: 0.5,
  } as const),

  createCoordinate({
    name: "compressTime",
    label: "Time spent for a full compression & decompression",
    default: 0.4,
  } as const),

  createCoordinate({
    name: "maxCompress",
    label: "Maximum compression",
    default: 0.25,
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

  const { jumpHeight, compressTime, maxCompress } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    if (t > 0.5) {
      return getUniforms(1 - t);
    }
    const transform = mat2d.create();
    const airTime = (2 * t) / (1 - compressTime);
    if (airTime < 1) {
      const h = (1 - airTime * airTime) * jumpHeight * 2;
      mat2d.translate(transform, transform, [0, -h]);
    } else {
      const groundTime = ((0.5 - t) * 2) / compressTime;
      const compressAmount = (1 - groundTime * groundTime) * maxCompress;
      const deform = 1 - compressAmount;
      mat2d.translate(transform, transform, [0, 1]);
      mat2d.scale(transform, transform, [1 / deform, deform]);
      mat2d.translate(transform, transform, [0, -1]);
    }

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
