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
