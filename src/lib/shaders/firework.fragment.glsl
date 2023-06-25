#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform float u_seed;
uniform float u_time;
uniform vec2 u_screenSize;
uniform float u_darkness;
uniform float u_cycles;
uniform float u_speedModifier;

out vec4 outColor;

float random1(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3))))
                 * 43758.5453);
}

vec3 random3(vec2 p) {
    return fract(sin(vec3(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3)),
                 dot(p, vec2(631.2, 448.7))))
                 * 43758.5453);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_screenSize) * vec2(1.0, -1.0) / u_screenSize.y; 
  outColor = texture(u_image, v_texCoords) * (1.0 - u_darkness);

  for (float explosion = 0.0; explosion < 3.0; ++explosion) {
    float speed = u_cycles;
    float t0 = u_time * speed + random1(vec2(explosion, speed));
    float t = fract(t0);
    float times = mod(floor(t0), speed);
    vec2 startPos = random2(vec2(explosion + 1.147 * u_seed, times + 2.2345 * u_seed)) * 2.0 - 1.0;
    vec3 color = random3(vec2(u_seed, explosion * 2.7 + times * 1.1));

    for (float particle = 0.0; particle < 100.0; ++particle) {
      vec2 r = random2(vec2(explosion + 23.3 * particle + 44.4 * u_seed, times + 3.667 * u_seed));
      vec2 v = random2(r) * vec2(u_speedModifier * 0.1 + sin(r.x) * 0.1 / speed, 6.28318530718);
      v = vec2(v.x * cos(v.y), v.x * sin(v.y));
      vec2 g = vec2(0.0, -0.5);
      vec2 p = startPos + v * t + 0.5 * g * t * t;
      float d = length(uv - p);
      float sparkle = cos((t + particle + r.y) * 200.0) * 0.5 + 0.5;
      float brightness = pow(0.01 / d, 1.5) * sparkle * (1.0 - t * t);
      outColor += vec4(brightness * color, step(0.1, brightness));
    }
  }
}
