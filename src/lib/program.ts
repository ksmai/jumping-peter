function createShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

function createProgram(
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
): WebGLProgram | null {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  if (!vertexShader) {
    return null;
  }

  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource,
  );
  if (!fragmentShader) {
    gl.deleteShader(vertexShader);
    return null;
  }

  const program = gl.createProgram();
  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }

  // not sure if this can be done in all browsers
  gl.detachShader(program, fragmentShader);
  gl.detachShader(program, vertexShader);
  gl.deleteShader(fragmentShader);
  gl.deleteShader(vertexShader);
  return program;
}

export interface Program<A extends string, U extends string> {
  program: WebGLProgram;
  attributeLocations: Record<A, number>;
  uniformLocations: Record<U, WebGLUniformLocation>;
}

export function compileProgram<A extends string, U extends string>(
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
  attributes: A[],
  uniforms: U[],
): Program<A, U> | null {
  const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
  if (!program) {
    return null;
  }

  const result = {
    program,
    attributeLocations: {},
    uniformLocations: {},
  } as Program<A, U>;

  for (const attribute of attributes) {
    const loc = gl.getAttribLocation(program, attribute);
    result.attributeLocations[attribute] = loc;
  }

  for (const uniform of uniforms) {
    const loc = gl.getUniformLocation(program, uniform);
    if (!loc) {
      console.error(`Cannot get location of uniform: ${uniform}`);
      gl.deleteProgram(program);
      return null;
    }
    result.uniformLocations[uniform] = loc;
  }

  return result;
}
