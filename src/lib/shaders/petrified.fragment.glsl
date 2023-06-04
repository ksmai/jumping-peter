#version 300 es
precision highp float;

in vec2 v_texCoords;
uniform sampler2D u_image;
uniform sampler2D u_additionalImages[2];
uniform float u_edgeThreshold;
uniform float u_edgeDarkness;
uniform float u_time;
uniform float u_timeBeforeShatter;
uniform float u_shatterColumns;
uniform float u_shatterRows;
uniform float u_column;
uniform float u_row;

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

float worleyDist(vec2 neighbor) {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);
  vec2 uvFract = fract(uv);
  vec2 neighborInt = uvInt + neighbor;
  if (neighborInt.x < 0.0 || neighborInt.x >= u_shatterColumns || neighborInt.y < 0.0 || neighborInt.y >= u_shatterRows) {
    return 2.0;
  }
  vec2 point = random2(neighborInt);
  vec2 diff = neighbor + point - uvFract;
  return length(diff);

}

float getAlpha() {
  vec2 uv = v_texCoords * vec2(u_shatterColumns, u_shatterRows);
  vec2 uvInt = floor(uv);
  float currentDist = worleyDist(vec2(u_column, u_row) - uvInt);
  for (int c = -1; c < 1; ++c) {
    for (int r = -1; r < 1; ++r) {
      vec2 neighbor = vec2(float(c), float(r));
      float dist = worleyDist(neighbor);
      if (dist < currentDist) {
        return 0.0;
      }
    }
  }
  return 1.0;
}


void main() {
  float petrifiedPercent = u_time / u_timeBeforeShatter;
  float alpha = getAlpha();
  if ((1.0 - v_texCoords.y) < petrifiedPercent) {
    vec4 texel = texture(u_additionalImages[0], v_texCoords);
    vec3 color = texel.rgb;
    if (isEdge()) {
      color = color * (1.0 - u_edgeDarkness);
    }
    outColor = vec4(color, texel.a * alpha);
  } else {
    vec4 texel = texture(u_image, v_texCoords);
    outColor = vec4(texel.rgb, texel.a * alpha);
  }
}
