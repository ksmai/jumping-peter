import uniq from "lodash/uniq";

import type { Effect, Sprite } from "./graphics/renderer";
import { SingleTexture, RenderTexture } from "./graphics/texture";
import { render } from "./graphics/renderer";
import { ProgramFactory, setUniforms } from "./graphics/program";
import { GeometryFactory } from "./graphics/geometry";
import type { Geometry } from "./graphics/geometry";
import * as transform from "./graphics/transform";
import * as utils from "./graphics/utils";
import { createSprites, ANIMATIONS } from "./animations";
import { createEffects } from "./graphics/effect";
import type { EffectType } from "./graphics/effect";
import type { Request, Response } from "./gif-encoder-worker";

type Vec3 = readonly [number, number, number];

export interface ImageOptions {
  readonly url: string;
}

export interface OutputOptions {
  readonly width: number;
  readonly height: number;
  readonly clear: Vec3;
  readonly delayMs: number;
  readonly quality: number;
  readonly totalFrames: number;
}

export interface Camera {
  readonly position: Vec3;
  readonly lookAt: Vec3;
  readonly up: Vec3;
}

export interface Projection {
  readonly perspective: boolean;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
  readonly top: number;
  readonly near: number;
  readonly far: number;
}

export interface Material {
  readonly specular: Vec3;
  readonly shininess: number;
}

export interface DirectionalLight {
  readonly ambient: Vec3;
  readonly diffuse: Vec3;
  readonly specular: Vec3;
  readonly direction: Vec3;
}

export interface PointLight {
  readonly ambient: Vec3;
  readonly diffuse: Vec3;
  readonly specular: Vec3;
  readonly position: Vec3;
  readonly attenuation1: number;
  readonly attenuation2: number;
}

export interface SpotLight {
  readonly ambient: Vec3;
  readonly diffuse: Vec3;
  readonly specular: Vec3;
  readonly position: Vec3;
  readonly direction: Vec3;
  readonly innerDegrees: number;
  readonly outerDegrees: number;
  readonly attenuation1: number;
  readonly attenuation2: number;
}

export interface EffectOption {
  readonly enabled: boolean;
  readonly type: EffectType;
}

export interface AnimationRequest {
  readonly image: ImageOptions;
  readonly output: OutputOptions;
  readonly camera: Camera;
  readonly projection: Projection;
  readonly material: Material;
  readonly directionalLight: DirectionalLight;
  readonly pointLight: PointLight;
  readonly spotLight: SpotLight;
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
    this.texture = new SingleTexture(this.gl);
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
    const {
      image,
      output,
      camera,
      projection,
      material,
      directionalLight,
      pointLight,
      spotLight,
    } = request;

    if (frame >= output.totalFrames) {
      return;
    }

    if (type === "gif" && !current.workerReady) {
      this.requestNextFrame();
      return;
    }

    if (type === "frame" || (type === "gif" && current.frame === 0)) {
      await this.texture.loadImage(image.url);
      if (current !== this.current) {
        return;
      }
      const { width, height, clear } = output;
      this.renderTextures.forEach((t) => t.setSize(width, height));
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      this.gl.clearColor(...clear, 1);
      this.gl.enable(this.gl.BLEND);
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      this.gl.activeTexture(this.gl.TEXTURE0 + this.texture.unit);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.texture);

      const u_view = transform.identity();
      transform.view(u_view, camera.position, camera.lookAt, camera.up);

      const u_projection = transform.identity();
      if (projection.perspective) {
        transform.perspective(
          u_projection,
          projection.left,
          projection.right,
          projection.bottom,
          projection.top,
          projection.near,
          projection.far,
        );
      } else {
        transform.orthographic(
          u_projection,
          projection.left,
          projection.right,
          projection.bottom,
          projection.top,
          projection.near,
          projection.far,
        );
      }

      const uniforms = {
        u_view,
        u_projection,
        "u_material.diffuse": this.texture.unit,
        "u_material.specular": material.specular,
        "u_material.shininess": material.shininess,
        "u_directionalLight.ambient": directionalLight.ambient,
        "u_directionalLight.diffuse": directionalLight.diffuse,
        "u_directionalLight.specular": directionalLight.specular,
        "u_directionalLight.direction": directionalLight.direction,
        "u_pointLight.ambient": pointLight.ambient,
        "u_pointLight.diffuse": pointLight.diffuse,
        "u_pointLight.specular": pointLight.specular,
        "u_pointLight.position": pointLight.position,
        "u_pointLight.attenuation1": pointLight.attenuation1,
        "u_pointLight.attenuation2": pointLight.attenuation2,
        "u_spotLight.ambient": spotLight.ambient,
        "u_spotLight.diffuse": spotLight.diffuse,
        "u_spotLight.specular": spotLight.specular,
        "u_spotLight.position": spotLight.position,
        "u_spotLight.direction": spotLight.direction,
        "u_spotLight.innerCos": Math.cos(
          utils.toRadian(spotLight.innerDegrees),
        ),
        "u_spotLight.outerCos": Math.cos(
          utils.toRadian(spotLight.outerDegrees),
        ),
        "u_spotLight.attenuation1": spotLight.attenuation1,
        "u_spotLight.attenuation2": spotLight.attenuation2,
      };

      for (const program of uniq(sprites.map((s) => s.program))) {
        this.gl.useProgram(program.program);
        setUniforms(this.gl, program, uniforms);
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
    this.renderTextures.forEach((t) => t.destroy());
    this.reject("Destroyed");
    if (this.animationFrame !== null) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }
}
