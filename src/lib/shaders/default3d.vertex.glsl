#version 300 es

layout(location = 0) in vec3 a_position;
layout(location = 1) in vec2 a_texCoords;
layout(location = 2) in vec3 a_normal;

uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;

out vec2 v_texCoords;
out vec3 v_normal;
out vec3 v_position;

void main() {
  mat4 modelView = u_view * u_model;
  v_position = vec3(modelView * vec4(a_position, 1.0));
  gl_Position = u_projection * vec4(v_position, 1.0);
  // flip y coordinate because readPixels() will invert the image again
  gl_Position.y *= -1.0;
  v_texCoords = a_texCoords;
  v_normal = (transpose(inverse(modelView)) * vec4(a_normal, 0)).xyz;
}
