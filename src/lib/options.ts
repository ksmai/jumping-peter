interface Slider<Name extends string> {
  type: "slider";
  name: Name;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
}

type CreateSlider<Name extends string> = Pick<
  Slider<Name>,
  "name" | "label" | "default"
>;

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

interface Toggle<Name extends string> {
  type: "toggle";
  name: Name;
  label: string;
  default: boolean;
}

type CreateToggle<Name extends string> = Pick<
  Toggle<Name>,
  "name" | "label" | "default"
>;

export function createToggle<Name extends string>(
  options: CreateToggle<Name>,
): Toggle<Name> {
  return {
    ...options,
    type: "toggle",
  };
}

type MappedType<T> = T extends { type: "slider" }
  ? number
  : T extends { type: "toggle" }
  ? boolean
  : never;

type MappedName<T> = T extends { name: infer N }
  ? N extends string
    ? N
    : never
  : never;

export type MappedOptions<T extends readonly unknown[], Name extends string> = {
  [U in T[number] as MappedName<U>]: MappedType<U>;
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
