// stored in column major order as in webgl
// prettier-ignore
export type Transform = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];

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
  mat[12] += x;
  mat[13] += y;
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
