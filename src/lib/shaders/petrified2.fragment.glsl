#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additionalImages[2];
uniform float u_edgeThreshold;
uniform float u_edgeDarkness;
uniform float u_seed;
uniform float u_time;
uniform float u_timeBeforeBreak;
uniform float u_timeBeforeFall;
uniform float u_numTurns;
uniform float u_i;

out vec4 outColor;

float getColor(vec2 offset) {
  vec2 coords = v_texCoords + offset / vec2(textureSize(u_image, 0));
  float inRange = float(coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0);
  vec4 texel = texture(u_image, coords);
  float average = dot(texel.rgb, vec3(1.0 / 3.0));
  return average * inRange;
}

bool isEdge() {
  vec2 offsets[8] = vec2[](
    vec2(-1.0, -1.0),
    vec2(-1.0,  0.0),
    vec2(-1.0,  1.0),
    vec2( 0.0, -1.0),
    vec2( 0.0,  1.0),
    vec2( 1.0, -1.0),
    vec2( 1.0,  0.0),
    vec2( 1.0,  1.0)
  );

  float colors[8];

  for (int i = 0; i < 8; ++i) {
    colors[i] = getColor(offsets[i]);
  }

  float color1 = colors[0] + 2.0 * colors[1] + colors[2] - colors[5] - 2.0 * colors[6] - colors[7];
  float color2 = colors[0] + 2.0 * colors[3] + colors[5] - colors[2] - 2.0 * colors[4] - colors[7];
  float result = length(vec2(color1, color2));

  return result > u_edgeThreshold;
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5,183.3))))
                 * 43758.5453);
}

float getAlpha() {
  float fy = fract(v_texCoords.y * (u_numTurns + 1.0));
  float iy = floor(v_texCoords.y * (u_numTurns + 1.0));
  float prev, next;
  if (iy == 0.0) {
    prev = 0.0;
  } else {
    prev = random2(vec2(iy, u_seed)).x * 0.1;
  }
  if (iy == u_numTurns) {
    next = 0.0;
  } else {
    next = random2(vec2(iy + 1.0, u_seed)).x * 0.1;
  }
  if (mod(iy, 2.0) == 0.0) {
    prev *= -1.0;
  } else {
    next *= -1.0;
  }
  float curr = mix(prev, next, fy) + 0.5;

  if (u_time > u_timeBeforeBreak) {
    float t = (u_time - u_timeBeforeBreak) / u_timeBeforeFall;
    if (v_texCoords.y < t && abs(v_texCoords.x - curr) < 0.03) {
      return 0.0;
    }
  }

  if (v_texCoords.x <= curr && u_i < 0.5) {
    return 1.0;
  }
  if (v_texCoords.x > curr && u_i > 0.5) {
    return 1.0;
  }
  return 0.0;
}

void main() {
  float petrifiedPercent = u_time / u_timeBeforeBreak;
  float alpha = getAlpha();
  if ((1.0 - v_texCoords.y) < petrifiedPercent) {
    outColor = texture(u_additionalImages[0], v_texCoords);
    if (isEdge()) {
      outColor.rgb *= 1.0 - u_edgeDarkness;
    }
    vec4 texel = texture(u_image, v_texCoords);
    outColor.a = texel.a * alpha;
  } else {
    outColor = texture(u_image, v_texCoords);
    outColor.a *= alpha;
  }
}
