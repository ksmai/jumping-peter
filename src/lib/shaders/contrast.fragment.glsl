#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_contrast;

out vec4 outColor;

void main() {
  outColor = vec4(texture(u_image, v_texCoords).rgb, 1.0);
  outColor.rgb = (outColor.rgb - 0.5) * u_contrast + 0.5;
}
