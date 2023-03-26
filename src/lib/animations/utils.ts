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
