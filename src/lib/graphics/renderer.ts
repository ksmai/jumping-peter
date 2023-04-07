import type { Program } from "./program";
import { setUniforms } from "./program";
import type { SingleTexture } from "./texture";
import type { Geometry } from "./geometry";
import * as transform from "./transform";

export interface Sprite {
  program: Program;
  geometry: Geometry;
  getUniforms(t: number): Record<string, unknown>;
}

const identity = transform.identity();

export function render(
  gl: WebGL2RenderingContext,
  t: number,
  sprites: Sprite[],
  texture: SingleTexture,
  clearColor: [number, number, number, number],
): void {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(...clearColor);
  gl.clear(gl.COLOR_BUFFER_BIT);

  let lastProgram;
  let lastGeometry;
  let lastTexture;

  for (const sprite of sprites) {
    if (lastProgram !== sprite.program) {
      gl.useProgram(sprite.program.program);
      lastProgram = sprite.program;
    }
    if (lastGeometry !== sprite.geometry) {
      gl.bindVertexArray(sprite.geometry.vao);
      lastGeometry = sprite.geometry;
    }
    if (lastTexture !== texture) {
      gl.activeTexture(gl.TEXTURE0 + texture.unit);
      gl.bindTexture(gl.TEXTURE_2D, texture.texture);
      lastTexture = texture;
    }
    const uniforms = {
      u_image: texture.unit,
      u_world: identity,
      u_viewProjection: identity,
      u_directionalLighting: false,
      ...sprite.getUniforms(t),
    };
    setUniforms(gl, sprite.program, uniforms);
    gl.drawArrays(sprite.geometry.drawMode, 0, sprite.geometry.drawCount);
  }
}
