import { loadImage } from "./graphics/texture";
import { GIFEncoder } from "./antimatter15-jsgif";
import * as ExtremeSpeed from "./animations/extreme-speed";
import type { ExtremeSpeedOptions } from "./animations/extreme-speed";
import * as Jumping from "./animations/jumping";
import type { JumpingOptions } from "./animations/jumping";
import * as Spinning from "./animations/spinning";
import type { SpinningOptions } from "./animations/spinning";
import * as Excited from "./animations/excited";
import type { ExcitedOptions } from "./animations/excited";
import * as Expanding from "./animations/expanding";
import type { ExpandingOptions } from "./animations/expanding";

export interface GifOptions {
  width: number;
  height: number;
  delayMs: number;
  totalFrames: number;
  imageUrl: string;
}

export interface WorkerData {
  id: number;
  gif: GifOptions;
  animation:
    | ExtremeSpeedOptions
    | JumpingOptions
    | SpinningOptions
    | ExcitedOptions
    | ExpandingOptions;
}

export interface WorkerResultSuccess {
  id: number;
  type: "success";
  dataUri: string;
}

export interface WorkerResultError {
  id: number;
  type: "error";
  error: string;
}

export type WorkerResult = WorkerResultSuccess | WorkerResultError;

const canvas = new OffscreenCanvas(128, 128);
const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;

self.onmessage = async (e) => {
  const data = e.data as WorkerData;

  if (!gl) {
    const result: WorkerResultError = {
      id: data.id,
      type: "error",
      error: "webgl2 is not supported",
    };
    postMessage(result);
    return;
  }

  await loadImage(gl, data.gif.imageUrl);

  canvas.width = data.gif.width;
  canvas.height = data.gif.height;

  try {
    switch (data.animation.name) {
      case "extreme-speed":
        ExtremeSpeed.init(gl);
        break;
      case "jumping":
        Jumping.init(gl);
        break;
      case "spinning":
        Spinning.init(gl);
        break;
      case "excited":
        Excited.init(gl);
        break;
      case "expanding":
        Expanding.init(gl);
        break;
      default:
        ((_: never) => {
          throw new Error("Unknown animation");
        })(data.animation);
    }
  } catch (e) {
    const result: WorkerResultError = {
      id: data.id,
      type: "error",
      error: String(e),
    };
    postMessage(result);
    return;
  }

  const encoder = new (GIFEncoder as any)();
  encoder.setRepeat(0);
  encoder.setDelay(data.gif.delayMs);
  encoder.setSize(data.gif.width, data.gif.height);
  encoder.start();

  for (let frame = 0; frame <= data.gif.totalFrames; ++frame) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    try {
      switch (data.animation.name) {
        case "extreme-speed":
          ExtremeSpeed.render(gl, frame / data.gif.totalFrames, data.animation);
          break;
        case "jumping":
          Jumping.render(gl, frame / data.gif.totalFrames, data.animation);
          break;
        case "spinning":
          Spinning.render(gl, frame / data.gif.totalFrames, data.animation);
          break;
        case "excited":
          Excited.render(gl, frame / data.gif.totalFrames, data.animation);
          break;
        case "expanding":
          Expanding.render(gl, frame / data.gif.totalFrames, data.animation);
          break;
        default:
          ((_: never) => {
            throw new Error("Unknown animation");
          })(data.animation);
      }
    } catch (e) {
      const result: WorkerResultError = {
        id: data.id,
        type: "error",
        error: String(e),
      };
      postMessage(result);
      return;
    }

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
    encoder.setTransparent(0xffffff);
  }

  encoder.finish();
  const gif = encoder.stream().getData();
  const dataUri = "data:image/gif;base64," + btoa(gif);
  const result: WorkerResultSuccess = {
    id: data.id,
    type: "success",
    dataUri,
  };
  postMessage(result);
};
