import type { Program } from "./program";

export const initialState = { initialized: false } as const;

export type State<Attribute extends string, Uniform extends string> =
  | typeof initialState
  | {
      initialized: true;
      program: Program<Attribute, Uniform>;
      vao: WebGLVertexArrayObject;
      texture?: WebGLTexture;
    };

export interface EditOptionsSlider<Name extends string> {
  type: "slider";
  name: Name;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
}

// FIXME type is wrong for MappedOptions. use slider for everything now
export interface EditOptionsToggle<Name extends string> {
  type: "toggle";
  name: Name;
  label: string;
  default: boolean;
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

export type MappedOptions<
  T extends readonly unknown[],
  Name extends string,
> = Omit<
  {
    [Index in keyof T as MappedName<T[Index]>]: MappedType<T[Index]>;
  },
  "name"
> & { name: Name };

// FIXME types
export function getDefaultOptions<T, Name extends string>(
  editOptions: readonly T[],
): MappedOptions<T[], Name> {
  const result = {} as any;
  for (const options of editOptions) {
    result[(options as any).name] = (options as any).default;
  }
  return result;
}
