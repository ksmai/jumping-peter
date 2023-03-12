export interface Texture {
  loadingUrl: string | null;
  url: string | null;
  texture: WebGLTexture | null;
  unit: number;
}

export const texture: Texture = {
  loadingUrl: null,
  url: null,
  texture: null,
  unit: 0,
};

export async function loadImage(
  gl: WebGL2RenderingContext,
  url: string,
): Promise<void> {
  if (url === texture.url) {
    return;
  }
  texture.loadingUrl = url;

  const response = await fetch(url);
  const blob = await response.blob();
  const image = await createImageBitmap(blob);

  if (texture.loadingUrl !== url) {
    return;
  }

  if (texture.texture) {
    gl.deleteTexture(texture.texture);
  }
  const webglTexture = gl.createTexture();
  if (!webglTexture) {
    throw new Error("Failed to create texture");
  }
  gl.activeTexture(gl.TEXTURE0 + texture.unit);
  gl.bindTexture(gl.TEXTURE_2D, webglTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.texParameteri(
    gl.TEXTURE_2D,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR,
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  texture.texture = webglTexture;
  texture.url = url;
}
