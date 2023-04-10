export class SingleTexture {
  private loadingUrl: string | null = null;
  private url: string | null = null;
  texture: WebGLTexture | null = null;
  readonly unit = 0;

  constructor(private readonly gl: WebGL2RenderingContext) {}

  async loadImage(url: string): Promise<void> {
    if (url === this.url) {
      return;
    }
    this.loadingUrl = url;

    const response = await fetch(url);
    const blob = await response.blob();
    const image = await createImageBitmap(blob);

    if (this.loadingUrl !== url) {
      return;
    }

    const { gl } = this;

    if (this.texture) {
      gl.deleteTexture(this.texture);
    }
    const webglTexture = gl.createTexture();
    if (!webglTexture) {
      throw new Error("Failed to create texture");
    }
    gl.activeTexture(gl.TEXTURE0 + this.unit);
    gl.bindTexture(gl.TEXTURE_2D, webglTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    this.texture = webglTexture;
    this.url = url;
  }

  destroy(): void {
    if (this.texture) {
      this.gl.deleteTexture(this.texture);
    }
  }
}

export class RenderTexture {
  private texture: WebGLTexture | null = null;
  private framebuffer: WebGLFramebuffer;
  private width: number | null = null;
  private height: number | null = null;

  constructor(
    private readonly gl: WebGL2RenderingContext,
    private readonly unit: number,
  ) {
    const framebuffer = gl.createFramebuffer();
    if (!framebuffer) {
      throw new Error("Failed to create framebuffer");
    }
    this.framebuffer = framebuffer;
  }

  bindAsInput(): number {
    this.gl.activeTexture(this.gl.TEXTURE0 + this.unit);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    return this.unit;
  }

  bindAsOutput(): void {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
  }

  setSize(width: number, height: number): void {
    if (width === this.width && height === this.height) {
      return;
    }
    if (this.texture !== null) {
      this.gl.deleteTexture(this.texture);
    }
    this.texture = this.gl.createTexture();
    if (!this.texture) {
      throw new Error("Failed to create texture");
    }
    this.width = width;
    this.height = height;
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE,
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE,
    );
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.texture,
      0,
    );
    const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
    if (status !== this.gl.FRAMEBUFFER_COMPLETE) {
      throw new Error("Failed to attach to framebuffer");
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  }

  destroy(): void {
    if (this.texture) {
      this.gl.deleteTexture(this.texture);
    }
    this.gl.deleteFramebuffer(this.framebuffer);
  }
}
