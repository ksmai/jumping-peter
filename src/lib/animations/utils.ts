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

// reference for easing functions
// https://easings.net/
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function easeInQuint(t: number): number {
  return t * t * t * t * t;
}

export function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

export function easeInOutQuint(t: number): number {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

export function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
