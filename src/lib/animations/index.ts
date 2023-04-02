import type { GeometryFactory } from "$lib/graphics/geometry";
import type { ProgramFactory } from "$lib/graphics/program";
import type { Sprite } from "$lib/graphics/renderer";

import { getValues } from "./options";
import * as Spinning from "./spinning";
import * as Expanding from "./expanding";
import * as ExtremeSpeed from "./extreme-speed";
import * as Excited from "./excited";
import * as Jumping from "./jumping";
import * as Tower from "./tower";

export interface FrameOptions {
  readonly delayMs: number;
  readonly totalFrames: number;
}

export const ANIMATIONS = [
  Jumping,
  ExtremeSpeed,
  Spinning,
  Excited,
  Expanding,
  Tower,
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  animation: (typeof ANIMATIONS)[number],
): Sprite[] {
  switch (animation.Name) {
    case "spinning":
      return Spinning.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    case "expanding":
      return Expanding.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    case "extreme-speed":
      return ExtremeSpeed.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    case "excited":
      return Excited.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    case "jumping":
      return Jumping.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    case "tower":
      return Tower.createSprites(
        programFactory,
        geometryFactory,
        getValues(animation.EditOptions, animation.Name),
      );
    default:
      ((animation: never) => {
        throw new Error(`Unknown animation: ${JSON.stringify(animation)}`);
      })(animation);
  }
}
