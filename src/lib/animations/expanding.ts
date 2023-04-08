import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import { createToggle, createScale } from "./options";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "expanding" as const;

export const frameOptions = {
  delayMs: 50,
  totalFrames: 20,
};

export const editOptions = [
  createScale({
    name: "minScale",
    value: 1,
  }),

  createScale({
    name: "maxScale",
    value: 2,
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

  const { minScale, maxScale, alternates } = options;

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = alternates ? Math.min(t, 1 - t) * 2 : t;
    const scale = utils.interpolate(minScale, maxScale, cycleT);
    const mat = transform.identity();
    transform.scale2d(mat, scale, scale);
    return {
      u_model: mat,
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
