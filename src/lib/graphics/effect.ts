import type { ProgramFactory, ProgramType } from "./program";
import type { Effect } from "./renderer";

export const EFFECTS = [
  "boxBlur",
  "guassianBlur1",
  "guassianBlur2",
  "guassianBlur3",
  "sharpen1",
  "sharpen2",
  "sharpen3",
  "emboss",
  "edgeDetect1",
  "edgeDetect2",
  "edgeDetect3",
  "edgeDetect4",
  "edgeDetect5",
  "edgeDetect6",
  "edgeDetect7",
  "sobelHorizontal",
  "sobelVertical",
  "previtHorizontal",
  "previtVertical",
  "darken",
  "lighten",
  "graysacle1",
  "graysacle2",
  "highContrast",
  "invert",
  "swap1",
  "swap2",
] as const;

export type EffectType = (typeof EFFECTS)[number];

const EffectConfig: Record<
  EffectType,
  { program: ProgramType; uniforms: Record<string, unknown> }
> = {
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
  guassianBlur1: {
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
  guassianBlur2: {
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
  guassianBlur3: {
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
  edgeDetect1: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        0,  1, 0,
        1, -4, 1,
        0,  1, 0,
      ],
    },
  },
  edgeDetect2: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -0.125, -0.125, -0.125,
        -0.125,      1, -0.125,
        -0.125, -0.125, -0.125,
      ],
    },
  },
  edgeDetect3: {
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
  edgeDetect4: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -5, 0, 0,
         0, 0, 0,
         0, 0, 5,
      ],
    },
  },
  edgeDetect5: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -1, -1, -1,
         0,  0,  0,
         1,  1,  1,
      ],
    },
  },
  edgeDetect6: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -1, -1, -1,
         2,  2,  2,
        -1, -1, -1,
      ],
    },
  },
  edgeDetect7: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        -5, -5, -5,
        -5, 39, -5,
        -5, -5, -5,
      ],
    },
  },
  sobelHorizontal: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
         1,  2,  1,
         0,  0,  0,
        -1, -2, -1,
      ],
    },
  },
  sobelVertical: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        1, 0, -1,
        2, 0, -2,
        1, 0, -1,
      ],
    },
  },
  previtHorizontal: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
         1,  1,  1,
         0,  0,  0,
        -1, -1, -1,
      ],
    },
  },
  previtVertical: {
    program: "kernal",
    uniforms: {
      // prettier-ignore
      u_kernal: [
        1, 0, -1,
        1, 0, -1,
        1, 0, -1,
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
  graysacle1: {
    program: "grayscale",
    uniforms: {
      u_weights: [1 / 3, 1 / 3, 1 / 3],
    },
  },
  graysacle2: {
    program: "grayscale",
    uniforms: {
      u_weights: [0.2126, 0.7152, 0.0722],
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
  swap1: {
    program: "channels",
    uniforms: {
      // prettier-ignore
      u_factors: [
        0, 0, 1,
        1, 0, 0,
        0, 1, 0,
      ],
    },
  },
  swap2: {
    program: "channels",
    uniforms: {
      // prettier-ignore
      u_factors: [
        0, 1, 0,
        0, 0, 1,
        1, 0, 0,
      ],
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
