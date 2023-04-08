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

type Vec3 = [number, number, number];

export interface Material {
  diffuse: SingleTexture;
  specular: Vec3;
  shininess: number;
}

export interface DirectionalLight {
  ambient: Vec3;
  diffuse: Vec3;
  specular: Vec3;
  direction: Vec3;
}

export interface PointLight {
  ambient: Vec3;
  diffuse: Vec3;
  specular: Vec3;
  position: Vec3;
  attenuation1: number;
  attenuation2: number;
}

export interface SpotLight {
  ambient: Vec3;
  diffuse: Vec3;
  specular: Vec3;
  position: Vec3;
  direction: Vec3;
  innerDegrees: number;
  outerDegrees: number;
  attenuation1: number;
  attenuation2: number;
}

export interface Lighting {
  material: Material;
  directional: DirectionalLight;
  point: PointLight;
  spot: SpotLight;
}

const identity = transform.identity();

export function render(
  gl: WebGL2RenderingContext,
  t: number,
  sprites: Sprite[],
  lighting: Lighting,
  clearColor: [number, number, number, number],
): void {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(...clearColor);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const texture = lighting.material.diffuse;
  gl.activeTexture(gl.TEXTURE0 + texture.unit);
  gl.bindTexture(gl.TEXTURE_2D, texture.texture);

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
    const uniforms = {
      u_model: identity,
      u_view: identity,
      u_projection: identity,
      "u_material.diffuse": texture.unit,
      "u_material.specular": lighting.material.specular,
      "u_material.shininess": lighting.material.shininess,
      "u_directionalLight.ambient": lighting.directional.ambient,
      "u_directionalLight.diffuse": lighting.directional.diffuse,
      "u_directionalLight.specular": lighting.directional.specular,
      "u_directionalLight.direction": lighting.directional.direction,
      "u_pointLight.ambient": lighting.point.ambient,
      "u_pointLight.diffuse": lighting.point.diffuse,
      "u_pointLight.specular": lighting.point.specular,
      "u_pointLight.position": lighting.point.position,
      "u_pointLight.attenuation1": lighting.point.attenuation1,
      "u_pointLight.attenuation2": lighting.point.attenuation2,
      "u_spotLight.ambient": lighting.spot.ambient,
      "u_spotLight.diffuse": lighting.spot.diffuse,
      "u_spotLight.specular": lighting.spot.specular,
      "u_spotLight.position": lighting.spot.position,
      "u_spotLight.direction": lighting.spot.direction,
      "u_spotLight.innerCos": Math.cos(lighting.spot.innerDegrees),
      "u_spotLight.outerCos": Math.cos(lighting.spot.outerDegrees),
      "u_spotLight.attenuation1": lighting.spot.attenuation1,
      "u_spotLight.attenuation2": lighting.spot.attenuation2,
      ...sprite.getUniforms(t),
    };
    setUniforms(gl, sprite.program, uniforms);
    gl.drawArrays(sprite.geometry.drawMode, 0, sprite.geometry.drawCount);
  }
}
