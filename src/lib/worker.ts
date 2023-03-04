import { GIFEncoder } from "./antimatter15-jsgif";
import * as ExtremeSpeed from './animations/extreme-speed';
import type { ExtremeSpeedOptions } from './animations/extreme-speed';

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
  animation: ExtremeSpeedOptions;
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

self.onmessage = async (e) => {
  const data = e.data as WorkerData;
  const response = await fetch(data.gif.imageUrl);
  const blob = await response.blob();
  const image = await createImageBitmap(blob);

  const canvas = new OffscreenCanvas(data.gif.width, data.gif.height);
  const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
  if (!gl) {
    const result: WorkerResultError = {
      id: data.id,
      type: "error",
      error: "webgl2 is not supported",
    };
    postMessage(result);
    return;
  }

  try {
    switch (data.animation.name) {
      case 'extreme-speed':
	ExtremeSpeed.init(gl, image);
	break;
      default:
	((_: never) => {throw new Error('Unknown animation');})(data.animation.name);
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
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    try {
      switch (data.animation.name) {
	case 'extreme-speed':
	  ExtremeSpeed.render(gl, frame / data.gif.totalFrames, data.animation);
	  break;
	default:
	  ((_: never) => {throw new Error('Unknown animation');})(data.animation.name);
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
