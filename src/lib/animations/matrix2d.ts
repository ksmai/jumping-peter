/**
 * Stores first 2 rows of the 3x3 transform matrix in column major order
 * i.e. a11, a21, a12, a22, a13, a23
 * The last row is always assumed to be (0, 0, 1)
 */
export type Matrix2D = [number, number, number, number, number, number];

export function identity(): Matrix2D {
  return [1, 0, 0, 1, 0, 0];
}

export function scale(mat: Matrix2D, x: number, y: number): void {
  mat[0] *= x;
  mat[2] *= x;
  mat[4] *= x;
  mat[1] *= y;
  mat[3] *= y;
  mat[5] *= y;
}

export function rotate(mat: Matrix2D, degrees: number): void {
  const radians = (degrees / 180) * Math.PI;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const [a, b, c, d, e, f] = mat;
  mat[0] = a * cos - b * sin;
  mat[1] = a * sin + b * cos;
  mat[2] = c * cos - d * sin;
  mat[3] = c * sin + d * cos;
  mat[4] = e * cos - f * sin;
  mat[5] = e * sin + f * cos;
}

export function translate(mat: Matrix2D, x: number, y: number): void {
  mat[4] += x;
  mat[5] += y;
}

export type Transform = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export function toTransform(mat: Matrix2D): Transform {
  // prettier-ignore
  return [
    mat[0], mat[1], 0,
    mat[2], mat[3], 0,
    mat[4], mat[5], 1,
  ]
}
