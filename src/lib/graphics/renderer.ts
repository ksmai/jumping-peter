import type { Program } from "./program";
import { setUniforms } from "./program";
import type { Geometry } from "./geometry";

export interface Sprite {
  program: Program;
  geometry: Geometry;
  getUniforms(t: number): Record<string, unknown>;
}

export function render(
  gl: WebGL2RenderingContext,
  t: number,
  sprites: Sprite[],
): void {
  gl.clear(gl.COLOR_BUFFER_BIT);

  let lastProgram;
  let lastGeometry;

  for (const sprite of sprites) {
    if (lastProgram !== sprite.program) {
      gl.useProgram(sprite.program.program);
      lastProgram = sprite.program;
    }
    if (lastGeometry !== sprite.geometry) {
      gl.bindVertexArray(sprite.geometry.vao);
      lastGeometry = sprite.geometry;
    }
    const uniforms = sprite.getUniforms(t);
    setUniforms(gl, sprite.program, uniforms);
    gl.drawArrays(sprite.geometry.drawMode, 0, sprite.geometry.drawCount);
  }
}
