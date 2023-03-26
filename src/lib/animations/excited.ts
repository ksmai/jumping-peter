import {
  createAngle,
  createPositiveInteger,
  createTwoWayPercentage,
} from "./options";
import * as mat2d from "./matrix2d";
import * as utils from "./utils";
import type { MappedOptions } from "./options";
import type { Sprite } from "../graphics/renderer";
import type { ProgramFactory } from "../graphics/program";
import type { GeometryFactory } from "../graphics/geometry";

export const Name = "excited" as const;
export type Name = typeof Name;

export const EditOptions = [
  createAngle({
    name: "angle",
    default: 15,
  } as const),

  createTwoWayPercentage({
    name: "startOffset",
    default: -0.1,
  } as const),

  createTwoWayPercentage({
    name: "endOffset",
    default: 0.1,
  } as const),

  createPositiveInteger({
    name: "cycles",
    default: 2,
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

  const { angle, startOffset, endOffset, cycles } = options;

  const radians = utils.toRadian(angle);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  const getUniforms: Sprite["getUniforms"] = (t) => {
    const cycleT = (t * 2 * cycles) % 1;
    const translateT = Math.min(cycleT, 1 - cycleT) * 2;
    const translateX = utils.interpolate(
      -startOffset * sin,
      -endOffset * sin,
      translateT,
    );
    const translateY = utils.interpolate(
      startOffset * cos,
      endOffset * cos,
      translateT,
    );

    const mat = mat2d.identity();
    mat2d.rotate(mat, angle);
    mat2d.translate(mat, translateX, translateY);
    mat2d.scale(mat, t > 0.5 ? -1 : 1, 1);

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
