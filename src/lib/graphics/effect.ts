import type { ProgramFactory, ProgramType } from "./program";
import type { Effect } from "./renderer";

export const EFFECTS = [
  "grayscale",
  "boxBlur",
  "guassian1",
  "guassian2",
  "guassian3",
  "sharpen1",
  "sharpen2",
  "sharpen3",
  "emboss",
  "laplacian1",
  "laplacian2",
  "sobel",
  "prewitt",
  "darken",
  "lighten",
  "highContrast",
  "invert",
  "grb",
  "rbg",
  "bgr",
  "gbr",
  "brg",
  "0gb",
  "r0b",
  "rg0",
  "vignette",
] as const;

export type EffectType = (typeof EFFECTS)[number];

const EffectConfig: Record<
  EffectType,
  { program: ProgramType; uniforms: Record<string, unknown> }
> = {
  grayscale: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0.2126, 0.2126, 0.2126,
        0.7152, 0.7152, 0.7152,
        0.0722, 0.0722, 0.0722,
      ],
    },
  },
  boxBlur: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9,
      ],
    },
  },
  guassian1: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        1/16, 2/16, 1/16,
        2/16, 4/16, 2/16,
        1/16, 2/16, 1/16,
      ],
    },
  },
  guassian2: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
          0, 0.2, 0,
        0.2, 0.2, 0.2,
          0, 0.2, 0,
      ],
    },
  },
  guassian3: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        0.045, 0.122, 0.045,
        0.122, 0.332, 0.122,
        0.045, 0.122, 0.045,
      ],
    },
  },
  sharpen1: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
         0, -1,  0,
        -1,  5, -1,
         0, -1,  0,
      ],
    },
  },
  sharpen2: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -1, -1, -1,
        -1,  9, -1,
        -1, -1, -1,
      ],
    },
  },
  sharpen3: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -0.125, -0.125, -0.125,
        -0.125,      2, -0.125,
        -0.125, -0.125, -0.125,
      ],
    },
  },
  emboss: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -2, -1, 0,
        -1,  1, 1,
         0,  1, 2,
      ],
    },
  },
  laplacian1: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
         0,  -1,  0,
        -1,   4, -1,
         0,  -1,  0,
      ],
    },
  },
  laplacian2: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -1, -1, -1,
        -1,  8, -1,
        -1, -1, -1,
      ],
    },
  },
  sobel: {
    program: "gradient2",
    uniforms: {
      // prettier-ignore
      u_kernal1: [
         3, 0,  -3,
        10, 0, -10,
         3, 0,  -3,
      ],
      // prettier-ignore
      u_kernal2: [
         3,  10,  3,
         0,   0,  0,
        -3, -10, -3,
      ],
    },
  },
  prewitt: {
    program: "gradient2",
    uniforms: {
      // prettier-ignore
      u_kernal1: [
        1, 0, -1,
        1, 0, -1,
        1, 0, -1,
      ],
      // prettier-ignore
      u_kernal2: [
         1,  1,  1,
         0,  0,  0,
        -1, -1, -1,
      ],
    },
  },
  darken: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        0,   0, 0,
        0, 0.5, 0,
        0,   0, 0,
      ],
    },
  },
  lighten: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        0, 0, 0,
        0, 2, 0,
        0, 0, 0,
      ],
    },
  },
  highContrast: {
    program: "contrast",
    uniforms: {
      u_contrast: 2,
    },
  },
  invert: {
    program: "invert",
    uniforms: {},
  },
  grb: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0, 1, 0,
        1, 0, 0,
        0, 0, 1,
      ],
    },
  },
  rbg: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        1, 0, 0,
        0, 0, 1,
        0, 1, 0,
      ],
    },
  },
  bgr: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0, 0, 1,
        0, 1, 0,
        1, 0, 0,
      ],
    },
  },
  gbr: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0, 0, 1,
        1, 0, 0,
        0, 1, 0,
      ],
    },
  },
  brg: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0, 1, 0,
        0, 0, 1,
        1, 0, 0,
      ],
    },
  },
  "0gb": {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ],
    },
  },
  r0b: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        1, 0, 0,
        0, 0, 0,
        0, 0, 1,
      ],
    },
  },
  rg0: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        1, 0, 0,
        0, 1, 0,
        0, 0, 0,
      ],
    },
  },
  vignette: {
    program: "vignette",
    uniforms: {
      u_inner: 0.4,
      u_outer: 0.6,
    },
  },
} as const;

export function createEffects(
  programFactory: ProgramFactory,
  types: EffectType[],
): Effect[] {
  return types.map((type) => ({
    program: programFactory.createProgram(EffectConfig[type].program),
    uniforms: EffectConfig[type].uniforms,
  }));
}
