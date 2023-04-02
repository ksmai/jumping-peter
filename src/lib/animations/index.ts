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
import * as Repeated from "./repeated";
import * as MirrorLeft from "./mirror-left";

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
  Repeated,
  MirrorLeft,
];

export function createSprites(
  programFactory: ProgramFactory,
  geometryFactory: GeometryFactory,
  animation: (typeof ANIMATIONS)[number],
): Sprite[] {
  const options = getValues(animation.editOptions);
  switch (animation.name) {
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
    case "tower":
      return Tower.createSprites(programFactory, geometryFactory, options);
    case "repeated":
      return Repeated.createSprites(programFactory, geometryFactory, options);
    case "mirror-left":
      return MirrorLeft.createSprites(programFactory, geometryFactory, options);
    default:
      ((animation: never) => {
        throw new Error(`Unknown animation: ${JSON.stringify(animation)}`);
      })(animation);
  }
}
