#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_kernel;

out vec4 outColor;

vec3 getColor(vec2 offset, sampler2D image, vec2 texCoords) {
  vec2 coords = texCoords + offset / vec2(textureSize(image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  return texture(image, coords).rgb * inRange;
}

vec3 kernalMultiply(mat3 kernel, sampler2D image, vec2 texCoords) {
  vec3 result = vec3(0.0, 0.0, 0.0);

  result += kernel[0][0] * getColor(vec2(-1.0,  1.0), image, texCoords);
  result += kernel[0][1] * getColor(vec2(-1.0,  0.0), image, texCoords);
  result += kernel[0][2] * getColor(vec2(-1.0, -1.0), image, texCoords);
  result += kernel[1][0] * getColor(vec2( 0.0,  1.0), image, texCoords);
  result += kernel[1][1] * getColor(vec2( 0.0,  0.0), image, texCoords);
  result += kernel[1][2] * getColor(vec2( 0.0, -1.0), image, texCoords);
  result += kernel[2][0] * getColor(vec2( 1.0,  1.0), image, texCoords);
  result += kernel[2][1] * getColor(vec2( 1.0,  0.0), image, texCoords);
  result += kernel[2][2] * getColor(vec2( 1.0, -1.0), image, texCoords);

  return result;
}

void main() {
  vec3 color = kernalMultiply(u_kernel, u_image, v_texCoords);
  outColor = vec4(color, 1.0);
}
