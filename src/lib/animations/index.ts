import type { Sprite } from "$lib/graphics/renderer";
import type { ProgramFactory } from "$lib/graphics/program";
import type { GeometryFactory } from "$lib/graphics/geometry";

import { getDefaultOptions } from "./options";
import * as Spinning from "./spinning";
import * as Expanding from "./expanding";
import * as ExtremeSpeed from "./extreme-speed";
import * as Excited from "./excited";
import * as Jumping from "./jumping";

export const animations = [
  Jumping,
  ExtremeSpeed,
  Spinning,
  Excited,
  Expanding,
].map((animation) => ({
  name: animation.Name,
  editOptions: animation.EditOptions,
  defaultRenderOptions: getDefaultOptions(
    animation.EditOptions,
    animation.Name,
  ),
}));

export type AnimationOptions =
  | Jumping.RenderOption
  | ExtremeSpeed.RenderOption
  | Spinning.RenderOption
  | Excited.RenderOption
  | Expanding.RenderOption;

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  options: AnimationOptions,
): Sprite[] {
  switch (options.name) {
    case "spinning":
      return Spinning.createSprites(programFactory, geometryFactory, options);
    case "expanding":
      return Expanding.createSprites(programFactory, geometryFactory, options);
    case "extreme-speed":
      return ExtremeSpeed.createSprites(
        programFactory,
        geometryFactory,
        options,
      );
    case "excited":
      return Excited.createSprites(programFactory, geometryFactory, options);
    case "jumping":
      return Jumping.createSprites(programFactory, geometryFactory, options);
    default:
      ((o: never) => {
        throw new Error(`Unknown animation options: ${JSON.stringify(o)}`);
      })(options);
  }
}
