import uniq from "lodash/uniq";

import type { Effect, Sprite } from "./graphics/renderer";
import { SingleTexture, RenderTexture } from "./graphics/texture";
import { render } from "./graphics/renderer";
import { ProgramFactory, setUniforms } from "./graphics/program";
import { GeometryFactory } from "./graphics/geometry";
import type { Geometry } from "./graphics/geometry";
import { createSprites, ANIMATIONS } from "./animations";
import { createEffects } from "./graphics/effect";
import type { EffectType } from "./graphics/effect";
import type { Request, Response } from "./gif-encoder-worker";

export interface ImageOptions {
  readonly url: string;
}

export interface AdditionalImagesOptions {
  readonly urls: string[];
}

export interface OutputOptions {
  readonly width: number;
  readonly height: number;
  readonly delayMs: number;
  readonly quality: number;
  readonly totalFrames: number;
}

export interface EffectOption {
  readonly enabled: boolean;
  readonly type: EffectType;
}

export interface AnimationRequest {
  readonly image: ImageOptions;
  readonly additionalImages: AdditionalImagesOptions;
  readonly output: OutputOptions;
  readonly effects: EffectOption[];
  readonly animation: (typeof ANIMATIONS)[number];
}

export interface AnimationResultGifSuccess {
  readonly dataUri: string;
}

interface ItemGif {
  readonly type: "gif";
  readonly request: AnimationRequest;
  readonly resolve: (result: AnimationResultGifSuccess) => void;
  readonly reject: (e: Error) => void;
  frame: number;
  readonly sprites: Sprite[];
  readonly effects: Effect[];
  readonly callback: (frame: number) => void;
  readonly worker: Worker;
  workerReady: boolean;
}

interface ItemFrame {
  readonly type: "frame";
  readonly request: AnimationRequest;
  readonly resolve: () => void;
  readonly reject: (e: Error) => void;
  readonly frame: number;
  readonly sprites: Sprite[];
  readonly effects: Effect[];
}

type Item = ItemGif | ItemFrame;

export class Animator {
  private readonly gl: WebGL2RenderingContext;
  private readonly programFactory: ProgramFactory;
  private readonly geometryFactory: GeometryFactory;
  private readonly texture: SingleTexture;
  private readonly additionalTextures: [SingleTexture, SingleTexture];
  private readonly renderTextures: [RenderTexture, RenderTexture];
  private readonly quad: Geometry;
  private current: Item | null = null;
  private animationFrame: number | null = null;

  constructor(public readonly canvas: HTMLCanvasElement) {
    const context = canvas.getContext("webgl2");
    if (!context) {
      throw new Error("webgl2 is not supported");
    }
    this.gl = context;
    this.programFactory = new ProgramFactory(this.gl);
    this.geometryFactory = new GeometryFactory(this.gl);
    this.texture = new SingleTexture(this.gl, 0);
    this.additionalTextures = [
      new SingleTexture(this.gl, 3),
      new SingleTexture(this.gl, 4),
    ];
    this.renderTextures = [
      new RenderTexture(this.gl, 1),
      new RenderTexture(this.gl, 2),
    ];
    this.quad = this.geometryFactory.createGeometry("quad");
  }

  animate(
    request: AnimationRequest,
    callback: () => void,
  ): Promise<AnimationResultGifSuccess> {
    return new Promise((resolve, reject) => {
      const worker = new Worker(
        new URL("$lib/gif-encoder-worker", import.meta.url),
        { type: "module", name: "gif-encoder" },
      );
      const item: ItemGif = {
        type: "gif",
        request,
        resolve,
        reject,
        frame: 0,
        sprites: createSprites(
          this.programFactory,
          this.geometryFactory,
          request.animation,
        ),
        effects: createEffects(
          this.programFactory,
          request.effects.filter((e) => e.enabled).map((e) => e.type),
        ),
        callback,
        worker,
        workerReady: false,
      };

      const { width, height, delayMs, quality } = request.output;

      worker.onmessage = (e) => {
        const data = e.data as Response;

        let request: Request;

        switch (data.type) {
          case "Ready":
            item.workerReady = true;
            request = {
              type: "Init",
              width,
              height,
              delayMs,
              quality,
            };
            worker.postMessage(request);
            break;
          case "FrameAdded":
            callback();
            break;
          case "Success":
            this.resolve(data.dataUri);
            break;
          case "Failure":
            this.reject(data.error);
            break;
          default:
            ((_: never) => {
              this.reject(
                `Cannot handle worker message: ${JSON.stringify(data)}`,
              );
            })(data);
        }
      };

      worker.onerror = (e) => {
        this.reject(e.message);
      };

      this.setCurrent(item);
    });
  }

  renderFrame(request: AnimationRequest, frame: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const item: ItemFrame = {
        type: "frame",
        request,
        resolve,
        reject,
        frame,
        sprites: createSprites(
          this.programFactory,
          this.geometryFactory,
          request.animation,
        ),
        effects: createEffects(
          this.programFactory,
          request.effects.filter((e) => e.enabled).map((e) => e.type),
        ),
      };
      this.setCurrent(item);
    });
  }

  private setCurrent(item: Item): void {
    this.reject("Request cancelled");
    this.current = item;
    this.requestNextFrame();
  }

  private resolve(dataUri: string): void {
    if (this.current) {
      this.current.resolve({ dataUri });
      if (this.current.type === "gif") {
        const { worker } = this.current;
        worker.onmessage = null;
        worker.onerror = null;
        worker.terminate();
      }
      this.current = null;
    }
  }

  private reject(message: string): void {
    if (this.current) {
      this.current.reject(new Error(message));
      if (this.current.type === "gif") {
        const { worker } = this.current;
        worker.onmessage = null;
        worker.onerror = null;
        worker.terminate();
      }
      this.current = null;
    }
  }

  private async processLoop(): Promise<void> {
    this.animationFrame = null;

    if (!this.current) {
      return;
    }

    const current = this.current;

    const { type, request, resolve, sprites, effects, frame } = current;
    const { image, additionalImages, output } = request;

    if (frame >= output.totalFrames) {
      return;
    }

    if (type === "gif" && !current.workerReady) {
      this.requestNextFrame();
      return;
    }

    if (type === "frame" || (type === "gif" && current.frame === 0)) {
      await Promise.all([
        this.texture.loadImage(image.url),
        ...this.additionalTextures.map((texture, i) =>
          additionalImages.urls[i]
            ? texture.loadImage(additionalImages.urls[i])
            : Promise.resolve(),
        ),
      ]);
      if (current !== this.current) {
        return;
      }
      const { width, height } = output;
      this.renderTextures.forEach((t) => t.setSize(width, height));
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.enable(this.gl.BLEND);
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      this.gl.activeTexture(this.gl.TEXTURE0 + this.texture.unit);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.texture);
      this.additionalTextures.forEach((texture) => {
        this.gl.activeTexture(this.gl.TEXTURE0 + texture.unit);
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture.texture);
      });

      for (const program of uniq(sprites.map((s) => s.program))) {
        this.gl.useProgram(program.program);
        setUniforms(this.gl, program, { u_image: this.texture.unit });
        this.additionalTextures.forEach((texture, i) => {
          const key = `u_additionalImages[${i}]`;
          setUniforms(this.gl, program, { [key]: texture.unit });
        });
      }
    }

    render(this.gl, frame / request.output.totalFrames, sprites, {
      renderTextures: this.renderTextures,
      quad: this.quad,
      effects,
    });

    if (type === "frame") {
      resolve();
    } else {
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

      const { worker } = current;

      const request: Request = { type: "AddFrame", buffer: pixels.buffer };
      worker.postMessage(request, [pixels.buffer]);

      if (frame === output.totalFrames - 1) {
        const request: Request = { type: "GetResult" };
        worker.postMessage(request);
      } else {
        this.requestNextFrame();
      }
      current.frame += 1;
    }
  }

  private requestNextFrame(): void {
    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame(() => this.processLoop());
    }
  }

  destroy(): void {
    this.programFactory.destroy();
    this.geometryFactory.destroy();
    this.texture.destroy();
    this.additionalTextures.forEach((t) => t.destroy());
    this.renderTextures.forEach((t) => t.destroy());
    this.reject("Destroyed");
    if (this.animationFrame !== null) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }
}
