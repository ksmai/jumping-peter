import * as transform from "../graphics/transform";
import * as utils from "../graphics/utils";
import type { MappedOptions } from "./options";
import { createToggle } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "mirror" as const;

export const frameOptions = {
  delayMs: 50,
  totalFrames: 16,
};

export const editOptions = [
  createToggle({
    name: "rightHalf",
    value: false,
  }),
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const { rightHalf } = options;
  const geometry = geometryFactory.createGeometry(
    rightHalf ? "rightHalf" : "leftHalf",
  );

  const getLeftUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = Math.min(t, 1 - t) * 2;
    const mat = transform.identity();
    const p = utils.easeOutBack(t2);
    const offset = utils.interpolate(-2, -1, p);
    if (!rightHalf) {
      transform.scale2d(mat, -1, 1);
    }
    transform.translate2d(mat, offset, 0);
    return {
      u_model: mat,
    };
  };

  const getRightUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = Math.min(t, 1 - t) * 2;
    const mat = transform.identity();
    const p = utils.easeOutBack(t2);
    const offset = utils.interpolate(2, 1, p);
    if (rightHalf) {
      transform.scale2d(mat, -1, 1);
    }
    transform.translate2d(mat, offset, 0);
    return {
      u_model: mat,
    };
  };

  return [
    {
      program,
      geometry,
      getUniforms: getLeftUniforms,
    },
    {
      program,
      geometry,
      getUniforms: getRightUniforms,
    },
  ];
}
