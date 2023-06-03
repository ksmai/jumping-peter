#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
out vec4 outColor;

void main() {
    vec3 texel = texture(u_image, v_texCoords).rgb;
    outColor = vec4(texel, 1.0);
}
