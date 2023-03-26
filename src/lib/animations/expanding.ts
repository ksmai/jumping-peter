import * as mat2d from "./matrix2d";
import * as utils from "./utils";
import { createToggle, createScale } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "expanding" as const;
export type Name = typeof Name;

export const FrameOptions = {
  delayMs: 50,
  totalFrames: 20,
} as const;

export const EditOptions = [
  createScale({
    name: "minScale",
    default: 1,
  } as const),

  createScale({
    name: "maxScale",
    default: 2,
  } as const),

  createToggle({
    name: "alternates",
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

  const { minScale, maxScale, alternates } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = alternates ? Math.min(t, 1 - t) * 2 : t;
    const scale = utils.interpolate(minScale, maxScale, cycleT);
    const mat = mat2d.identity();
    mat2d.scale(mat, scale, scale);
    return {
      u_transform: mat2d.toTransform(mat),
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
