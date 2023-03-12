import { mat2d } from "gl-matrix";

import { createToggle, createScale, type MappedOptions } from "../options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "expanding" as const;
export type Name = typeof Name;

export const EditOptions = [
  createScale({
    name: "minScale",
    label: "Minimum scale",
    default: 1,
  } as const),

  createScale({
    name: "maxScale",
    label: "Maximum scale",
    default: 2,
  } as const),

  createToggle({
    name: "alternate",
    label: "Alterate",
    default: false,
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

  const { minScale, maxScale, alternate } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    if (alternate && t > 0.5) {
      return getUniforms(1 - t);
    }
    const scale = minScale + (maxScale - minScale) * t * (alternate ? 2 : 1);
    const transform = mat2d.create();
    mat2d.scale(transform, transform, [scale, scale]);
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
