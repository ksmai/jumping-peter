#version 300 es
precision highp float;

in vec2 v_texCoords;
in vec3 v_normal;
in vec3 v_position;

struct Material {
  vec3 specular;
  float shininess;
};

struct DirectionalLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 direction;
};

struct PointLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  float attenuation1;
  float attenuation2;
};

struct SpotLight {
  vec3 ambient;
  vec3 diffuse;
  vec3 specular;
  vec3 position;
  vec3 direction;
  float innerCos;
  float outerCos;
  float attenuation1;
  float attenuation2;
};

uniform sampler2D u_image;
uniform Material u_material;
uniform DirectionalLight u_directionalLight;
uniform PointLight u_pointLight;
uniform SpotLight u_spotLight;

vec3 computeSpotLight(SpotLight light, vec3 normal, vec3 fragToCamera, vec3 texel) {
  float dist = length(light.position - v_position);
  float attenuation = 1.0 / (1.0 + light.attenuation1 * dist + light.attenuation2 * dist * dist);
  vec3 dir = normalize(light.position - v_position);
  float angle = dot(normalize(-light.direction), dir);
  float intensity = smoothstep(light.outerCos, light.innerCos, angle);

  float diff = max(dot(dir, normal), 0.0);

  vec3 halfVec = normalize(dir + fragToCamera);
  float spec = pow(max(dot(halfVec, normal), 0.0), u_material.shininess);

  vec3 ambient = light.ambient * texel * attenuation * intensity;
  vec3 diffuse = light.diffuse * texel * diff * attenuation * intensity;
  vec3 specular = light.specular * u_material.specular * spec * attenuation * intensity;

  return ambient + diffuse + specular;
}

vec3 computeDirectionalLight(DirectionalLight directionalLight, vec3 normal, vec3 fragToCamera, vec3 texel) {
  return computeSpotLight(SpotLight(
    directionalLight.ambient,
    directionalLight.diffuse,
    directionalLight.specular,
    -directionalLight.direction + v_position,
    directionalLight.direction,
    // disable intensity
    -2.0, -3.0,
    // disable attenuation
    0.0, 0.0
  ), normal, fragToCamera, texel);
}

vec3 computePointLight(PointLight pointLight, vec3 normal, vec3 fragToCamera, vec3 texel) {
  return computeSpotLight(SpotLight(
    pointLight.ambient,
    pointLight.diffuse,
    pointLight.specular,
    pointLight.position,
    -pointLight.position + v_position,
    // disable intensity
    -2.0, -3.0,
    pointLight.attenuation1,
    pointLight.attenuation2
  ), normal, fragToCamera, texel);
}

out vec4 outColor;

void main() {
  vec4 texel = texture(u_image, v_texCoords);
  // front facing is actually the back face since we flipped y-axis in the vertex shader
  vec3 normal = normalize(v_normal) * (1.0 - 2.0 * float(gl_FrontFacing));
  vec3 fragToCamera = normalize(-v_position);

  vec3 color = vec3(0.0);
  color += computeDirectionalLight(u_directionalLight, normal, fragToCamera, texel.rgb);
  color += computePointLight(u_pointLight, normal, fragToCamera, texel.rgb);
  color += computeSpotLight(u_spotLight, normal, fragToCamera, texel.rgb);

  outColor = vec4(color, texel.a);
}
