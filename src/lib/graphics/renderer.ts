import type { Program } from "./program";
import { setUniforms } from "./program";
import type { Geometry } from "./geometry";
import type { RenderTexture } from "./texture";

export interface Sprite {
  program: Program;
  geometry: Geometry;
  getUniforms(t: number): Record<string, unknown>;
}

export interface PostProcess {
  renderTextures: [RenderTexture, RenderTexture];
  quad: Geometry;
  effects: Effect[];
}

export interface Effect {
  program: Program;
  uniforms: Record<string, unknown>;
}

export function render(
  gl: WebGL2RenderingContext,
  t: number,
  sprites: Sprite[],
  postProcess: PostProcess,
): void {
  if (postProcess.effects.length > 0) {
    postProcess.renderTextures[0].bindAsOutput();
  } else {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

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

  if (postProcess.effects.length === 0) {
    return;
  }

  gl.bindVertexArray(postProcess.quad.vao);
  for (let i = 0; i < postProcess.effects.length; ++i) {
    const { program, uniforms } = postProcess.effects[i];
    const input = i % 2;
    const output = 1 - input;
    if (i < postProcess.effects.length - 1) {
      postProcess.renderTextures[output].bindAsOutput();
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program.program);
    const unit = postProcess.renderTextures[input].bindAsInput();
    setUniforms(gl, program, { u_image: unit, ...uniforms });
    gl.drawArrays(postProcess.quad.drawMode, 0, postProcess.quad.drawCount);
  }
}
