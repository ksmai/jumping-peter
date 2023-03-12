declare class GIFEncoder {
  constructor();
  setRepeat(iter: number): void;
  setDelay(ms: number): void;
  setSize(w: number, h: number): void;
  start(): boolean;
  addFrame(frame: Uint8ClampedArray, isImageData: boolean): void;
  setTransparent(color: number): void;
  finish(): void;
  stream(): ByteArray;
}

interface ByteArray {
  getData(): string;
}

export const GIFEncoder: GIFEncoder;
