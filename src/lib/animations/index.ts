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
import * as Mirror from "./mirror";
import * as Panic from "./panic";
import * as Rotating from "./rotating";
import * as Party from "./party";
import * as Parrot from "./parrot";
import * as Wiggling from "./wiggling";
import * as PetrifiedShattered from "./petrified-shattered";
import * as PetrifiedBroken from "./petrified-broken";
import * as Firework from "./firework";
import * as Bravo from "./bravo";

export const ANIMATIONS = [
  Jumping,
  ExtremeSpeed,
  Spinning,
  Excited,
  Expanding,
  Tower,
  Repeated,
  Mirror,
  Panic,
  Rotating,
  Party,
  Parrot,
  Wiggling,
  PetrifiedShattered,
  PetrifiedBroken,
  Firework,
  Bravo,
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
    case "mirror":
      return Mirror.createSprites(programFactory, geometryFactory, options);
    case "panic":
      return Panic.createSprites(programFactory, geometryFactory, options);
    case "rotating":
      return Rotating.createSprites(programFactory, geometryFactory, options);
    case "party":
      return Party.createSprites(programFactory, geometryFactory, options);
    case "parrot":
      return Parrot.createSprites(programFactory, geometryFactory, options);
    case "wiggling":
      return Wiggling.createSprites(programFactory, geometryFactory, options);
    case "petrified-shattered":
      return PetrifiedShattered.createSprites(
        programFactory,
        geometryFactory,
        options,
      );
    case "petrified-broken":
      return PetrifiedBroken.createSprites(
        programFactory,
        geometryFactory,
        options,
      );
    case "firework":
      return Firework.createSprites(programFactory, geometryFactory, options);
    case "bravo":
      return Bravo.createSprites(programFactory, geometryFactory, options);
    default:
      ((animation: never) => {
        throw new Error(`Unknown animation: ${JSON.stringify(animation)}`);
      })(animation);
  }
}
