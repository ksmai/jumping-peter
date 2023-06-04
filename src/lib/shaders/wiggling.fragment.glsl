#version 300 es
precision highp float;

in vec2 v_texCoords;

uniform float u_time;
uniform float u_amplitude;
uniform float u_frequency;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
  vec2 texCoords = v_texCoords + vec2(sin((v_texCoords.y * u_frequency + u_time) * radians(360.0)) * u_amplitude, 0.0);
  outColor = texture(u_image, texCoords);
  outColor.a *= float(texCoords.x >= 0.0 && texCoords.x <= 1.0);
}
