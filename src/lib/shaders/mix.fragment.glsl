#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform mat3 u_weights;

out vec4 outColor;

void main() {
  outColor = vec4(u_weights * texture(u_image, v_texCoords).rgb, 1.0);
}
