import { compileProgram } from "../program";
import type { Program } from "../program";

const vertexShaderSource = `\
#version 300 es

in vec2 a_clipCoord;
uniform float u_percentage;

in vec2 a_texCoord;
out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_clipCoord, 0, 1);
  v_texCoord = vec2(a_texCoord.x + u_percentage, 1.0 - a_texCoord.y);
}
`;

const fragmentShaderSource = `\
#version 300 es

precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  outColor = texture(u_image, v_texCoord);
}
`;

type State =
  | { initialized: false }
  | { initialized: true, program: Program, vao: WebGLVertexArrayObject, texture?: WebGLTexture };

let state: State = { initialized: false };

export function init(gl: WebGL2RenderingContext, image: TexImageSource) {
  if (state.initialized) {
    updateTexture(gl, image);
    return;
  }

  const program = compileProgram(
    gl,
    vertexShaderSource,
    fragmentShaderSource,
    ["a_texCoord", "a_clipCoord"],
    ["u_percentage", "u_image"],
  );
  if (!program) {
    throw new Error("Failed to compile the program");
  }

  const vao = gl.createVertexArray();
  if (!vao) {
    throw new Error("Failed to create vertex array object");
  }
  gl.bindVertexArray(vao);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    // prettier-ignore
    new Float32Array([
      // a_clipCoord.x, a_clipCoord.y, a_texCoord.x, a_texCoord
      -1, -1, 0, 1,
      -1, 1, 0, 0,
      1, -1, 1, 1,
      1, 1, 1, 0,
    ]),
    gl.STATIC_DRAW,
  );
  gl.enableVertexAttribArray(program.attributeLocations.a_clipCoord);
  gl.vertexAttribPointer(
    program.attributeLocations.a_clipCoord,
    2,
    gl.FLOAT,
    false,
    4 * 4,
    0,
  );
  gl.enableVertexAttribArray(program.attributeLocations.a_texCoord);
  gl.vertexAttribPointer(
    program.attributeLocations.a_texCoord,
    2,
    gl.FLOAT,
    false,
    4 * 4,
    2 * 4,
  );

  state = {
    initialized: true,
    program,
    vao,
  };

  updateTexture(gl, image);
}

function updateTexture(gl: WebGL2RenderingContext, image: TexImageSource) {
  if (!state.initialized) {
    throw new Error('Animation has not been initialized: extreme-speed');
  }
  if (state.texture) {
    gl.deleteTexture(state.texture);
  }

  const texture = gl.createTexture();
  if (!texture) {
    throw new Error('Failed to create texture');
  }
  state.texture = texture;
  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
}

export interface ExtremeSpeedOptions {
  name: 'extreme-speed';
  totalFrames: number;
}

export function render(gl: WebGL2RenderingContext, frame: number, options: ExtremeSpeedOptions): boolean {
  if (!state.initialized) {
    throw new Error('Animation has not been initialized: extreme-speed');
  }
  if (frame > options.totalFrames) {
    return false;
  }

  const percentage = frame / options.totalFrames;
  gl.useProgram(state.program.program);
  gl.bindVertexArray(state.vao);
  gl.uniform1i(state.program.uniformLocations.u_image, 0);
  gl.uniform1f(state.program.uniformLocations.u_percentage, percentage);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  return true;
}
