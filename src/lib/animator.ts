import uniq from "lodash/uniq";
import { GIFEncoder } from "./antimatter15-jsgif";
import type { Sprite } from "./graphics/renderer";
import { SingleTexture } from "./graphics/texture";
import { render } from "./graphics/renderer";
import { ProgramFactory, setUniforms } from "./graphics/program";
import { GeometryFactory } from "./graphics/geometry";
import * as transform from "./graphics/transform";
import * as utils from "./graphics/utils";
import { createSprites, ANIMATIONS } from "./animations";

type Vec3 = readonly [number, number, number];

export interface ImageOptions {
  readonly url: string;
}

export interface OutputOptions {
  readonly width: number;
  readonly height: number;
  readonly clear: Vec3;
  readonly delayMs: number;
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

export interface AnimationRequest {
  readonly image: ImageOptions;
  readonly output: OutputOptions;
  readonly camera: Camera;
  readonly projection: Projection;
  readonly material: Material;
  readonly directionalLight: DirectionalLight;
  readonly pointLight: PointLight;
  readonly spotLight: SpotLight;
  readonly animation: (typeof ANIMATIONS)[number];
}

export interface AnimationResultGifSuccess {
  readonly dataUri: string;
}

interface QueueItemGif {
  readonly type: "gif";
  readonly request: AnimationRequest;
  readonly resolve: (result: AnimationResultGifSuccess) => void;
  readonly reject: (e: Error) => void;
  frame: number;
  readonly sprites: Sprite[];
  readonly callback: (frame: number) => void;
  readonly encoder: GIFEncoder;
}

interface QueueItemFrame {
  readonly type: "frame";
  readonly request: AnimationRequest;
  readonly resolve: () => void;
  readonly reject: (e: Error) => void;
  readonly frame: number;
  readonly sprites: Sprite[];
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
    request: AnimationRequest,
    callback: (frame: number) => void,
  ): Promise<AnimationResultGifSuccess> {
    return new Promise((resolve, reject) => {
      const encoder = new GIFEncoder();
      encoder.setRepeat(0);
      encoder.setDelay(request.output.delayMs);
      encoder.setSize(request.output.width, request.output.height);

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
        sprites: createSprites(
          this.programFactory,
          this.geometryFactory,
          request.animation,
        ),
        callback,
        encoder,
      });
      if (this.animationFrame === null) {
        this.animationFrame = requestAnimationFrame(() => this.processLoop());
      }
    });
  }

  renderFrame(request: AnimationRequest, frame: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.queue.push({
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
      });
      if (this.animationFrame === null) {
        this.animationFrame = requestAnimationFrame(() => this.processLoop());
      }
    });
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

    const { type, request, resolve, sprites, frame } = this.queue[0];
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
    if (type === "frame" || (type === "gif" && this.queue[0].frame === 0)) {
      await this.texture.loadImage(image.url);
      const { width, height, clear } = output;
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      this.gl.clearColor(...clear, 1);
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

    render(this.gl, frame / request.output.totalFrames, sprites);

    if (type === "frame") {
      resolve();
      this.queue.shift();
      this.animationFrame = null;
    } else {
      const { encoder, callback } = this.queue[0];
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

      if (frame === output.totalFrames - 1) {
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

  destroy(): void {
    this.programFactory.destroy();
    this.geometryFactory.destroy();
    this.texture.destroy();
    if (this.animationFrame !== null) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }
}
