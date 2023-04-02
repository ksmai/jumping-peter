import * as transform from "./transform";
import * as utils from "./utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const name = "mirror-left" as const;

export const frameOptions = {
  delayMs: 50,
  totalFrames: 16,
};

export const editOptions = [];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  _options: MappedOptions<typeof editOptions>,
): Sprite[] {
  const program = programFactory.createProgram("default");
  const geometry = geometryFactory.createGeometry("leftHalf");

  const getLeftUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = Math.min(t, 1 - t) * 2;
    const mat = transform.identity();
    const p = utils.easeOutBack(t2);
    const offset = utils.interpolate(-2, -1, p);
    transform.scale2d(mat, -1, 1);
    transform.translate2d(mat, offset, 0);
    return {
      u_transform: mat,
    };
  };

  const getRightUniforms: Sprite["getUniforms"] = (t) => {
    const t2 = Math.min(t, 1 - t) * 2;
    const mat = transform.identity();
    const p = utils.easeOutBack(t2);
    const offset = utils.interpolate(2, 1, p);
    transform.translate2d(mat, offset, 0);
    return {
      u_transform: mat,
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
