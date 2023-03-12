import { SingleTexture } from "./graphics/texture";
import { GIFEncoder } from "./antimatter15-jsgif";
import * as Spinning from "./animations/spinning";
import * as Expanding from "./animations/expanding";
import type { Sprite } from "./graphics/renderer";
import { render } from "./graphics/renderer";
import { ProgramFactory } from "./graphics/program";
import { GeometryFactory } from "./graphics/geometry";

export interface GifOptions {
  width: number;
  height: number;
  delayMs: number;
  totalFrames: number;
  imageUrl: string;
}

export type AnimationOptions = Spinning.RenderOption | Expanding.RenderOption;

export interface AnimationRequestGif {
  gif: GifOptions;
  animation: AnimationOptions;
}

export interface AnimationRequestFrame {
  gif: GifOptions;
  frame: number;
  animation: AnimationOptions;
}

export interface AnimationResultGifSuccess {
  dataUri: string;
}

interface QueueItemGif {
  type: "gif";
  request: AnimationRequestGif;
  resolve: (result: AnimationResultGifSuccess) => void;
  reject: (e: Error) => void;
  frame: number;
  sprites: Sprite[];
  callback: (frame: number) => void;
  encoder: GIFEncoder;
}

interface QueueItemFrame {
  type: "frame";
  request: AnimationRequestFrame;
  resolve: () => void;
  reject: (e: Error) => void;
  sprites: Sprite[];
}

type QueueItem = QueueItemGif | QueueItemFrame;

export class Animator {
  private readonly gl: WebGL2RenderingContext;
  private readonly programFactory: ProgramFactory;
  private readonly geometryFactory: GeometryFactory;
  private readonly texture: SingleTexture;
  private readonly queue: QueueItem[] = [];
  private animationFrame: number | null = null;

  constructor(public readonly canvas: HTMLCanvasElement) {
    const context = canvas.getContext("webgl2");
    if (!context) {
      throw new Error("webgl2 is not supported");
    }
    this.gl = context;
    this.programFactory = new ProgramFactory(this.gl);
    this.geometryFactory = new GeometryFactory(this.gl);
    this.texture = new SingleTexture(this.gl);
  }

  animate(
    request: AnimationRequestGif,
    callback: (frame: number) => void,
  ): Promise<AnimationResultGifSuccess> {
    return new Promise((resolve, reject) => {
      const encoder = new GIFEncoder();
      encoder.setRepeat(0);
      encoder.setDelay(request.gif.delayMs);
      encoder.setSize(request.gif.width, request.gif.height);

      const started = encoder.start();
      if (!started) {
        reject("Failed to start gif encoder");
        return;
      }

      this.queue.push({
        type: "gif",
        request,
        resolve,
        reject,
        frame: 0,
        sprites: this.createSprites(request.animation),
        callback,
        encoder,
      });
      if (this.animationFrame === null) {
        this.animationFrame = requestAnimationFrame(() => this.processLoop());
      }
    });
  }

  renderFrame(request: AnimationRequestFrame): Promise<void> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        type: "frame",
        request,
        resolve,
        reject,
        sprites: this.createSprites(request.animation),
      });
      if (this.animationFrame === null) {
        this.animationFrame = requestAnimationFrame(() => this.processLoop());
      }
    });
  }

  private createSprites(options: AnimationOptions): Sprite[] {
    switch (options.name) {
      case "spinning":
        return Spinning.createSprites(
          this.programFactory,
          this.geometryFactory,
          options,
        );
      case "expanding":
        return Expanding.createSprites(
          this.programFactory,
          this.geometryFactory,
          options,
        );
      default:
        ((o: never) => {
          throw new Error(`Unknown animation options: ${JSON.stringify(o)}`);
        })(options);
    }
  }

  private async processLoop(): Promise<void> {
    if (this.queue.length === 0) {
      this.animationFrame = null;
      return;
    }

    if (this.queue.length > 1) {
      for (let i = 0; i < this.queue.length - 1; ++i) {
        this.queue[i].reject(new Error("Request cancelled"));
      }
      this.queue.splice(0, this.queue.length - 1);
    }

    const { type, request, resolve, sprites } = this.queue[0];
    if (type === "frame" || (type === "gif" && this.queue[0].frame === 0)) {
      await this.texture.loadImage(request.gif.imageUrl);
      this.canvas.width = request.gif.width;
      this.canvas.height = request.gif.height;
    }

    if (type === "frame") {
      render(
        this.gl,
        request.frame / request.gif.totalFrames,
        sprites,
        this.texture,
      );
      resolve();
      this.queue.shift();
      this.animationFrame = null;
    } else {
      const { frame, encoder, sprites, callback } = this.queue[0];

      render(this.gl, frame / request.gif.totalFrames, sprites, this.texture);
      callback(frame);

      const pixels = new Uint8ClampedArray(
        this.gl.drawingBufferWidth * this.gl.drawingBufferHeight * 4,
      );

      this.gl.readPixels(
        0,
        0,
        this.gl.drawingBufferWidth,
        this.gl.drawingBufferHeight,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        pixels,
      );
      encoder.addFrame(pixels, true);
      encoder.setTransparent(0xffffff);

      if (frame === request.gif.totalFrames - 1) {
        encoder.finish();
        const gif = encoder.stream().getData();
        const dataUri = "data:image/gif;base64," + window.btoa(gif);
        resolve({ dataUri });
        this.queue.shift();
        this.animationFrame = null;
      } else {
        this.queue[0].frame += 1;
        this.animationFrame = requestAnimationFrame(() => this.processLoop());
      }
    }
  }
}
