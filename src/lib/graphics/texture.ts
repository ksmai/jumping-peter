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
