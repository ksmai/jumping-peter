// stored in column major order as in webgl
// prettier-ignore
export type Transform = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];

export type Vec3 = readonly [number, number, number];

export function identity(): Transform {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ];
}

export function scale2d(mat: Transform, x: number, y: number): void {
  mat[0] *= x;
  mat[4] *= x;
  mat[8] *= x;
  mat[12] *= x;
  mat[1] *= y;
  mat[5] *= y;
  mat[9] *= y;
  mat[13] *= y;
}

export function translate2d(mat: Transform, x: number, y: number): void {
  translate3d(mat, x, y, 0);
}

export function sheer2d(mat: Transform, x: number, y: number): void {
  const a = mat[0];
  const b = mat[4];
  const c = mat[8];
  const d = mat[12];

  mat[0] += x * mat[1];
  mat[4] += x * mat[5];
  mat[8] += x * mat[9];
  mat[12] += x * mat[13];
  mat[1] += y * a;
  mat[5] += y * b;
  mat[9] += y * c;
  mat[13] += y * d;
}

export function translate3d(
  mat: Transform,
  x: number,
  y: number,
  z: number,
): void {
  mat[12] += x;
  mat[13] += y;
  mat[14] += z;
}

export function rotate2d(mat: Transform, degrees: number): void {
  rotate3d(mat, degrees, [0, 0, 1]);
}

export function rotate3d(
  mat: Transform,
  degrees: number,
  axis: [number, number, number],
): void {
  const norm = Math.sqrt(
    axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2],
  );
  if (norm === 0) {
    return;
  }
  const x = axis[0] / norm;
  const y = axis[1] / norm;
  const z = axis[2] / norm;
  const radians = (degrees / 180) * Math.PI;
  const c = Math.cos(radians);
  const s = Math.sin(radians);

  // https://www.songho.ca/opengl/gl_rotate.html
  // prettier-ignore
  const m: Transform = [
    (1-c)*x*x + c, (1-c)*x*y + s*z, (1-c)*x*z - s*y, 0,
    (1-c)*x*y - s*z, (1-c)*y*y + c, (1-c)*y*z - s*x, 0,
    (1-c)*x*z + s*y, (1-c)*y*z - s*x, (1-c)*z*z + c, 0,
    0, 0, 0, 1,
  ];

  multLeft(mat, m);
}

// https://www.songho.ca/opengl/gl_camera.html
export function view(
  mat: Transform,
  camera: Vec3,
  lookAt: Vec3,
  up: Vec3,
): void {
  translate3d(mat, -camera[0], -camera[1], -camera[2]);

  const z: Vec3 = [-lookAt[0], -lookAt[1], -lookAt[2]];
  normalize(z);

  const x: Vec3 = cross(up, z);
  normalize(x);

  const y: Vec3 = cross(z, x);

  // prettier-ignore
  const rotation: Transform = [
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    0, 0, 0, 1,
  ];

  multLeft(mat, rotation);
}

// https://www.songho.ca/opengl/gl_projectionmatrix.html
export function perspective(
  mat: Transform,
  l: number,
  r: number,
  b: number,
  t: number,
  n: number,
  f: number,
): void {
  // prettier-ignore
  const matrix: Transform = [
    2 * n / (r - l), 0, 0, 0,
    0, 2 * n / (t - b), 0, 0,
    (r + l) / (r - l), (t + b) / (t - b), -(f + n) / (f - n), -1,
    0, 0, -2 * f * n / (f - n), 0,
  ];
  multLeft(mat, matrix);
}

export function orthographic(
  mat: Transform,
  l: number,
  r: number,
  b: number,
  t: number,
  n: number,
  f: number,
): void {
  // prettier-ignore
  const matrix: Transform = [
    2 / (r - l), 0, 0, 0,
    0, 2 / (t - b), 0, 0,
    0, 0, -2 / (f - n), 0,
    -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1,
  ];
  multLeft(mat, matrix);
}

function multLeft(dest: Transform, left: Transform): void {
  const right = dest.slice();
  for (let c = 0; c <= 3; ++c) {
    for (let r = 0; r <= 3; ++r) {
      const idx = 4 * c + r;
      dest[idx] = 0;
      for (let i = 0; i <= 3; ++i) {
        dest[idx] += left[4 * i + r] * right[4 * c + i];
      }
    }
  }
}

function normalize(vec: Vec3): Vec3 {
  const norm = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2]);
  if (norm === 0) {
    return vec;
  }

  return [vec[0] / norm, vec[1] / norm, vec[2] / norm];
}

function cross(v: Vec3, u: Vec3): Vec3 {
  return [
    v[1] * u[2] - v[2] * u[1],
    v[2] * u[0] - v[0] * u[2],
    v[0] * u[1] - v[1] * u[0],
  ];
}
