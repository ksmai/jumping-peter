export function interpolate(
  start: number,
  end: number,
  percentage: number,
): number {
  return start + (end - start) * percentage;
}

export function toRadian(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function random(t: number): number {
  const floats = new Float32Array([t]);
  const [num] = new Int32Array(floats.buffer);
  let x = Math.abs(num) | 0;
  // https://stackoverflow.com/questions/664014/what-integer-hash-function-are-good-that-accepts-an-integer-hash-key
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = (x >> 16) ^ x;
  return x / (Math.pow(2, 31) - 1);
}

// Reference for easing functions
// https://easings.net/
//
// Note to self: many functions like power functions or sine functions with a
// smooth curve can be used as an easing function. The only requirements for an
// easing function f: [0, 1] -> R are f(0) = 0 and f(1) = 1. Most of these
// functions are monotonically increasing, but occasionally we might want
// "elastic" or "bouncy" effects that might make the functions
// overshoot/undershoot for a bit.
//
// Given an ease-in function f (whexe f''(t) > 0), it is easy to construct an
// ease-out function g:
//  g(t) = 1 - f(1 - t)
//
// Notice that g(0) = 1 - f(1 - 0) = 0 and g(1) = 1 - f(1 - 1) = 1
// Also g'(t) = f'(1 - t) > 0 and g''(t) = -f''(1 - t) < 0
//
// We can also piece together f and g to produce an ease-in-out function h:
//  h(t) = f(t) / f(0.5) / 2 when t < 0.5
//  h(t) = 1 - f(2 * (1 - t)) / 2 when t >= 0.5
//
// It is easy to see that the 2nd derivative is positive in the first half of
// the function and negative in the second. We carefully scale the function so
// that they meet at t = 0.5 with h(0.5) = 0.5

export function makeEaseInPower(power: number): (t: number) => number {
  return (t) => Math.pow(t, power);
}

export function makeEaseOutPower(power: number): (t: number) => number {
  return (t) => 1 - Math.pow(1 - t, power);
}

export function makeEaseInOutPower(power: number): (t: number) => number {
  const p = Math.pow(2, power - 1);
  return (t) =>
    t < 0.5 ? p * Math.pow(t, power) : 1 - Math.pow(2 * (1 - t), power) / 2;
}

export const easeInOutCubic = makeEaseInOutPower(3);

export const easeOutQuad = makeEaseOutPower(2);

export function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
