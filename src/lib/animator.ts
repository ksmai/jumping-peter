import { loadImage } from "./graphics/texture";
import { GIFEncoder } from "./antimatter15-jsgif";
import * as Spinning from "./animations/spinning";
import type { SpinningOptions } from "./animations/spinning";
import type { Sprite } from "./graphics/renderer";
import { render } from "./graphics/renderer";

export interface GifOptions {
  width: number;
  height: number;
  delayMs: number;
  totalFrames: number;
  imageUrl: string;
}

export interface AnimationRequestGif {
  gif: GifOptions;
  animation: SpinningOptions;
}

export interface AnimationRequestFrame {
  gif: GifOptions;
  frame: number;
  animation: SpinningOptions;
}

export type AnimationRequest = AnimationRequestGif | AnimationRequestFrame;

export interface AnimationResultGifSuccess {
  dataUri: string;
}

let canvas: HTMLCanvasElement;
let gl: WebGL2RenderingContext;

export function init(c: HTMLCanvasElement): void {
  if (canvas) {
    throw new Error("Animator already initialized");
  }
  canvas = c;
  const context = canvas.getContext("webgl2");
  if (!context) {
    throw new Error("webgl2 is not supported");
  }
  gl = context;
}

interface GifItem {
  type: "gif";
  request: AnimationRequestGif;
  resolve: (result: AnimationResultGifSuccess) => void;
  reject: (e: Error) => void;
  frame: number;
  sprites: Sprite[];
  callback: (frame: number) => void;
  encoder: any; // TODO
}

interface FrameItem {
  type: "frame";
  request: AnimationRequestFrame;
  resolve: () => void;
  reject: (e: Error) => void;
}

type QueueItem = GifItem | FrameItem;

const items: QueueItem[] = [];

let animationFrame: number | null = null;

export function animate(
  request: AnimationRequestGif,
  callback: (frame: number) => void,
): Promise<AnimationResultGifSuccess> {
  return new Promise((resolve, reject) => {
    const encoder = new (GIFEncoder as any)();
    encoder.setRepeat(0);
    encoder.setDelay(request.gif.delayMs);
    encoder.setSize(request.gif.width, request.gif.height);
    encoder.start();

    items.push({
      type: "gif",
      request,
      resolve,
      reject,
      frame: 0,
      sprites: Spinning.createSprites(gl, request.animation),
      callback,
      encoder,
    });
    if (animationFrame === null) {
      animationFrame = requestAnimationFrame(processLoop);
    }
  });
}

export function renderFrame(request: AnimationRequestFrame): Promise<void> {
  return new Promise((resolve, reject) => {
    items.push({
      type: "frame",
      request,
      resolve,
      reject,
    });
    if (animationFrame === null) {
      animationFrame = requestAnimationFrame(processLoop);
    }
  });
}

async function processLoop() {
  if (items.length === 0) {
    animationFrame = null;
    return;
  }

  if (items.length > 1) {
    for (let i = 0; i < items.length - 1; ++i) {
      items[i].reject(new Error("Request cancelled"));
    }
    items.splice(0, items.length - 1);
  }

  const { type, request, resolve } = items[0];
  if (type === "frame" || (type === "gif" && items[0].frame === 0)) {
    await loadImage(gl, request.gif.imageUrl);
    canvas.width = request.gif.width;
    canvas.height = request.gif.height;
  }

  if (type === "frame") {
    const sprites = Spinning.createSprites(gl, request.animation);
    render(gl, request.frame / request.gif.totalFrames, sprites);
    resolve();
    items.shift();
    animationFrame = null;
  } else {
    const { frame, encoder, sprites, callback } = items[0];

    render(gl, frame / request.gif.totalFrames, sprites);
    callback(frame);

    const pixels = new Uint8ClampedArray(
      gl.drawingBufferWidth * gl.drawingBufferHeight * 4,
    );

    gl.readPixels(
      0,
      0,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels,
    );
    encoder.addFrame(pixels, true);
    // encoder.setTransparent(0xffffff);

    if (frame === request.gif.totalFrames - 1) {
      encoder.finish();
      const gif = encoder.stream().getData();
      const dataUri = "data:image/gif;base64," + window.btoa(gif);
      resolve({ dataUri });
      items.shift();
      animationFrame = null;
    } else {
      items[0].frame += 1;
      animationFrame = requestAnimationFrame(processLoop);
    }
  }
}
