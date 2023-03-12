import { ATTRIB_LOCATIONS } from "./program";

export interface Geometry {
  readonly vao: WebGLVertexArrayObject;
  readonly vbo: WebGLBuffer;
  readonly drawMode: number;
  readonly drawCount: number;
}

const geometryCreators = {
  full(gl: WebGL2RenderingContext): Geometry {
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

    // prettier-ignore
    const data = new Float32Array([
      // a_position.xy, a_texCoords.xy
      -1, -1, 0, 0,
      +1, -1, 1, 0,
      -1, +1, 0, 1,
      +1, +1, 1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

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
  },
} as const;

type GeometryType = keyof typeof geometryCreators;

export class GeometryFactory {
  private readonly geometries: Partial<Record<GeometryType, Geometry>> = {};

  constructor(private readonly gl: WebGL2RenderingContext) {}

  createGeometry(type: GeometryType): Geometry {
    let result = this.geometries[type];
    if (!result) {
      result = this.geometries[type] = geometryCreators[type](this.gl);
    }
    return result;
  }
}
