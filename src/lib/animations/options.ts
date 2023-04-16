import { base } from "$app/paths";

interface Slider<Name extends string> {
  readonly type: "slider";
  readonly name: Name;
  readonly value: number;
  readonly min: number;
  readonly max: number;
  readonly step: number;
}

type CreateSlider<Name extends string> = Pick<Slider<Name>, "name" | "value">;

// 0 degrees is right
// 90 degrees is down
export function createAngle<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: -360,
    max: 360,
    step: 1,
  };
}

// follow webgl convention:
// (-1, -1) is bottom left
// (1, 1) is top right
export function createCoordinate<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: -1,
    max: 1,
    step: 0.01,
  };
}

export function createPercentage<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 0,
    max: 1,
    step: 0.01,
  };
}

export function createTwoWayPercentage<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: -1,
    max: 1,
    step: 0.01,
  };
}

export function createOffset<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 0,
    max: 2,
    step: 0.01,
  };
}

export function createTwoWayOffset<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: -2,
    max: 2,
    step: 0.01,
  };
}

// 1 = original size
// > 1 = larger
// < 1 = smaller
export function createScale<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 0.01,
    max: 10,
    step: 0.01,
  };
}

// 1 = right / down
// 0 = stationary
// -1 = left / up
export function createDirection<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: -1,
    max: 1,
    step: 1,
  };
}

export function createPositiveInteger<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 1,
    max: 100,
    step: 1,
  };
}

export function createEasing<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 1,
    max: 5,
    step: 1,
  };
}

interface Toggle<Name extends string> {
  readonly type: "toggle";
  readonly name: Name;
  readonly value: boolean;
}

type CreateToggle<Name extends string> = Pick<Toggle<Name>, "name" | "value">;

export function createToggle<Name extends string>(
  options: CreateToggle<Name>,
): Toggle<Name> {
  return {
    ...options,
    type: "toggle",
  };
}

export type EditOption = Slider<string> | Toggle<string>;

type OptionType<T extends EditOption> = T extends Slider<string>
  ? number
  : T extends Toggle<string>
  ? boolean
  : never;

type OptionName<T> = T extends { name: infer N }
  ? N extends string
    ? N
    : never
  : never;

export type MappedOptions<T extends readonly EditOption[]> = {
  [U in T[number] as OptionName<U>]: OptionType<U>;
};

export function getValues<T extends readonly EditOption[]>(
  editOptions: T,
): MappedOptions<T> {
  return editOptions.reduce((result, option) => {
    Object.assign(result, { [option.name]: option.value });
    return result;
  }, {} as MappedOptions<T>);
}

export const defaults = {
  image: {
    url: `${base}/favicon.png`,
  } as { url: string },
  output: {
    width: 64,
    height: 64,
    delayMs: 50,
    totalFrames: 20,
    quality: 21,
  },
  material: {
    specular: [0, 0, 0],
    shininess: 32,
  },
  directionalLight: {
    ambient: [1, 1, 1],
    diffuse: [0, 0, 0],
    specular: [0, 0, 0],
    direction: [0, -1, -1],
  },
  pointLight: {
    ambient: [0, 0, 0],
    diffuse: [0, 0, 0],
    specular: [0, 0, 0],
    position: [0, 0, 0],
    attenuation1: 0.2,
    attenuation2: 0.1,
  },
  spotLight: {
    ambient: [0, 0, 0],
    diffuse: [0, 0, 0],
    specular: [0, 0, 0],
    position: [0, 0, 0],
    direction: [0, 0, -1],
    innerDegrees: 5,
    outerDegrees: 15,
    attenuation1: 0.2,
    attenuation2: 0.1,
  },
  camera: {
    position: [0, 0, 3],
    lookAt: [0, 0, -1],
    up: [0, 1, 0],
  },
  projection: {
    perspective: false,
    left: -1,
    right: 1,
    bottom: -1,
    top: 1,
    near: 0.1,
    far: 10,
  },
} as const;
