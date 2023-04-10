import { ATTRIB_LOCATIONS } from "./program";

export interface Geometry {
  readonly vao: WebGLVertexArrayObject;
  readonly vbo: WebGLBuffer;
  readonly drawMode: number;
  readonly drawCount: number;
}

// a_position.xyz, a_texCoords.xy, a_normal.xyz
// prettier-ignore
type Quad = Readonly<[
  number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number,
]>;

function createQuad(gl: WebGL2RenderingContext, quad: Quad): Geometry {
  const vao = gl.createVertexArray();
  if (vao === null) {
    throw new Error("Failed to create vertex array");
  }
  const vbo = gl.createBuffer();
  if (!vbo) {
    gl.deleteVertexArray(vao);
    throw new Error("Failed to create buffer");
  }

  gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(ATTRIB_LOCATIONS.a_position);
  gl.vertexAttribPointer(
    ATTRIB_LOCATIONS.a_position,
    3,
    gl.FLOAT,
    false,
    8 * 4,
    0,
  );

  gl.enableVertexAttribArray(ATTRIB_LOCATIONS.a_texCoords);
  gl.vertexAttribPointer(
    ATTRIB_LOCATIONS.a_texCoords,
    2,
    gl.FLOAT,
    false,
    8 * 4,
    3 * 4,
  );

  gl.enableVertexAttribArray(ATTRIB_LOCATIONS.a_normal);
  gl.vertexAttribPointer(
    ATTRIB_LOCATIONS.a_normal,
    3,
    gl.FLOAT,
    false,
    8 * 4,
    5 * 4,
  );

  gl.bindVertexArray(null);

  return {
    vao,
    vbo,
    drawMode: gl.TRIANGLE_STRIP,
    drawCount: 4,
  };
}

// prettier-ignore
const quads = {
  full: [
    -1, -1, 0, 0, 1, 0, 0, 1,
    +1, -1, 0, 1, 1, 0, 0, 1,
    -1, +1, 0, 0, 0, 0, 0, 1,
    +1, +1, 0, 1, 0, 0, 0, 1,
  ],
  sudoku: [
    -3, -3, 0, -1,  2, 0, 0, 1,
    +3, -3, 0,  2,  2, 0, 0, 1,
    -3, +3, 0, -1, -1, 0, 0, 1,
    +3, +3, 0,  2, -1, 0, 0, 1,
  ],
  tower: [
    -1, -3, 0, 0,  2, 0, 0, 1,
    +1, -3, 0, 1,  2, 0, 0, 1,
    -1, +3, 0, 0, -1, 0, 0, 1,
    +1, +3, 0, 1, -1, 0, 0, 1,
  ],
  topHalf: [
    -1, 0, 0, 0, 0.5, 0, 0, 1,
    +1, 0, 0, 1, 0.5, 0, 0, 1,
    -1, 1, 0, 0, 0,   0, 0, 1,
    +1, 1, 0, 1, 0,   0, 0, 1,
  ],
  bottomHalf: [
    -1, -1, 0, 0, 1,   0, 0, 1,
    +1, -1, 0, 1, 1,   0, 0, 1,
    -1,  0, 0, 0, 0.5, 0, 0, 1,
    +1,  0, 0, 1, 0.5, 0, 0, 1,
  ],
  leftHalf: [
    -1, -1, 0, 0,   1, 0, 0, 1,
     0, -1, 0, 0.5, 1, 0, 0, 1,
    -1, +1, 0, 0,   0, 0, 0, 1,
     0, +1, 0, 0.5, 0, 0, 0, 1,
  ],
  rightHalf: [
    0, -1, 0, 0.5, 1, 0, 0, 1,
    1, -1, 0, 1,   1, 0, 0, 1,
    0, +1, 0, 0.5, 0, 0, 0, 1,
    1, +1, 0, 1,   0, 0, 0, 1,
  ],
  // this is basically same as full but with y-axis flipped again because it is primarily used for post-processing where it will be run a varying number of times and no transformations are needed
  quad: [
    -1, -1, 0, 0, 0, 0, 0, 1,
    +1, -1, 0, 1, 0, 0, 0, 1,
    -1, +1, 0, 0, 1, 0, 0, 1,
    +1, +1, 0, 1, 1, 0, 0, 1,
  ],
} as const;

type GeometryType = keyof typeof quads;

export class GeometryFactory {
  private readonly geometries: Partial<Record<GeometryType, Geometry>> = {};

  constructor(private readonly gl: WebGL2RenderingContext) {}

  createGeometry(type: GeometryType): Geometry {
    let result = this.geometries[type];
    if (!result) {
      result = this.geometries[type] = createQuad(this.gl, quads[type]);
    }
    return result;
  }

  destroy(): void {
    for (const geometry of Object.values(this.geometries)) {
      this.gl.deleteVertexArray(geometry.vao);
      this.gl.deleteBuffer(geometry.vbo);
    }
  }
}
