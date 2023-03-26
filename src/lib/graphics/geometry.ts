import { ATTRIB_LOCATIONS } from "./program";

export interface Geometry {
  readonly vao: WebGLVertexArrayObject;
  readonly vbo: WebGLBuffer;
  readonly drawMode: number;
  readonly drawCount: number;
}

// prettier-ignore
type Quad = Readonly<[
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
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
    2,
    gl.FLOAT,
    false,
    4 * 4,
    0,
  );

  gl.enableVertexAttribArray(ATTRIB_LOCATIONS.a_texCoords);
  gl.vertexAttribPointer(
    ATTRIB_LOCATIONS.a_texCoords,
    2,
    gl.FLOAT,
    false,
    4 * 4,
    2 * 4,
  );

  gl.bindVertexArray(null);

  return {
    vao,
    vbo,
    drawMode: gl.TRIANGLE_STRIP,
    drawCount: 4,
  };
}

// a_position.xy, a_texCoords.xy
// prettier-ignore
const quads = {
  full: [
    -1, -1, 0, 1,
    +1, -1, 1, 1,
    -1, +1, 0, 0,
    +1, +1, 1, 0,
  ],
  sudoku: [
    -3, -3, -1,  2,
    +3, -3,  2,  2,
    -3, +3, -1, -1,
    +3, +3,  2, -1,
  ],
  tower: [
    -1, -3, 0,  2,
    +1, -3, 1,  2,
    -1, +3, 0, -1,
    +1, +3, 1, -1,
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
