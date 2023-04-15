import type { ProgramFactory, ProgramType } from "./program";
import type { Effect } from "./renderer";

export const EFFECTS = [
  "grayscale",
  "sepia",
  "boxBlur",
  "guassian",
  "sharpen1",
  "sharpen2",
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
  sepia: {
    program: "mix",
    uniforms: {
      // prettier-ignore
      u_weights: [
        0.393, 0.349, 0.272,
        0.769, 0.686, 0.534,
        0.189, 0.168, 0.131,
      ],
    },
  },
  boxBlur: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9,
      ],
    },
  },
  guassian: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        1/16, 2/16, 1/16,
        2/16, 4/16, 2/16,
        1/16, 2/16, 1/16,
      ],
    },
  },
  sharpen1: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        -0.0023, -0.0432, -0.0023,
        -0.0432,  1.1820, -0.0432,
        -0.0023, -0.0432, -0.0023,
      ],
    },
  },
  sharpen2: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        -1/9, -1/9, -1/9,
        -1/9, 17/9, -1/9,
        -1/9, -1/9, -1/9,
      ],
    },
  },
  emboss: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        -2, -1, 0,
        -1,  1, 1,
         0,  1, 2,
      ],
    },
  },
  laplacian1: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
         0,  -1,  0,
        -1,   4, -1,
         0,  -1,  0,
      ],
    },
  },
  laplacian2: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
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
      u_kernel1: [
         1, 0, -1,
         2, 0, -2,
         1, 0, -1,
      ],
      // prettier-ignore
      u_kernel2: [
         1,  2,  1,
         0,  0,  0,
        -1, -2, -1,
      ],
    },
  },
  prewitt: {
    program: "gradient2",
    uniforms: {
      // prettier-ignore
      u_kernel1: [
        1, 0, -1,
        1, 0, -1,
        1, 0, -1,
      ],
      // prettier-ignore
      u_kernel2: [
         1,  1,  1,
         0,  0,  0,
        -1, -1, -1,
      ],
    },
  },
  darken: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
        0,   0, 0,
        0, 0.5, 0,
        0,   0, 0,
      ],
    },
  },
  lighten: {
    program: "kernel",
    uniforms: {
      // prettier-ignore
      u_kernel: [
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
