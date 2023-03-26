interface Slider<Name extends string> {
  type: "slider";
  name: Name;
  default: number;
  min: number;
  max: number;
  step: number;
}

type CreateSlider<Name extends string> = Pick<Slider<Name>, "name" | "default">;

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

// (0, 0) is top left
// (1, 1) is bottom right
export function createCoordinate<Name extends string>(
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

// 1 = original size
// > 1 = larger
// < 1 = smaller
export function createScale<Name extends string>(
  options: CreateSlider<Name>,
): Slider<Name> {
  return {
    ...options,
    type: "slider",
    min: 0.1,
    max: 5,
    step: 0.1,
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

interface Toggle<Name extends string> {
  type: "toggle";
  name: Name;
  default: boolean;
}

type CreateToggle<Name extends string> = Pick<Toggle<Name>, "name" | "default">;

export function createToggle<Name extends string>(
  options: CreateToggle<Name>,
): Toggle<Name> {
  return {
    ...options,
    type: "toggle",
  };
}

type OptionType<T> = T extends { type: "slider" }
  ? number
  : T extends { type: "toggle" }
  ? boolean
  : never;

type OptionName<T> = T extends { name: infer N }
  ? N extends string
    ? N
    : never
  : never;

export type MappedOptions<T extends readonly unknown[], Name extends string> = {
  [U in T[number] as OptionName<U>]: OptionType<U>;
} & { name: Name };

export function getDefaultOptions<
  T extends readonly unknown[],
  Name extends string,
>(editOptions: T, name: Name): MappedOptions<T, Name> {
  const result: any = { name };
  for (const option of editOptions) {
    if (!option || typeof option !== "object") {
      continue;
    }
    if (!("name" in option) || typeof option.name !== "string") {
      continue;
    }
    if (!("default" in option) || typeof option.default === "undefined") {
      continue;
    }
    result[option.name] = option.default;
  }
  return result;
}
