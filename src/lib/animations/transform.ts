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

export function rotate2d(mat: Transform, degrees: number): void {
  const radians = (degrees / 180) * Math.PI;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const [a, b, , , c, d, , , e, f, , , g, h] = mat;
  mat[0] = a * cos - b * sin;
  mat[1] = a * sin + b * cos;
  mat[4] = c * cos - d * sin;
  mat[5] = c * sin + d * cos;
  mat[8] = e * cos - f * sin;
  mat[9] = e * sin + f * cos;
  mat[12] = g * cos - h * sin;
  mat[13] = g * sin + h * cos;
}

export function translate2d(mat: Transform, x: number, y: number): void {
  mat[12] += x;
  mat[13] += y;
}
