#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_time;
uniform vec2 u_normal;
uniform float u_startDist;
uniform float u_endDist;
uniform float u_blur;
uniform float u_lightness;

out vec4 outColor;

void main() {
  vec2 uv = (v_texCoords * 2.0 - 1.0) * vec2(1.0, -1.0);
  vec2 n = normalize(u_normal);
  float d = dot(uv, n);

  float t = smoothstep(0.0, 1.0, u_time);
  float dist = mix(u_startDist, u_endDist, t);
  float mask = smoothstep(dist - u_blur, dist, d) - smoothstep(dist, dist + u_blur, d);

  outColor = texture(u_image, v_texCoords);
  outColor.rgb *= mix(1.0, 1.0 + u_lightness, mask);
}
