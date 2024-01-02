uniform float uTime;
uniform vec3 uEarthColor;
uniform vec3 uWaterColor;
uniform vec3 uBorderColor;

varying vec2 vUv;
varying vec4 vTexture;

vec4 baseColor() {
    float v = vTexture.a;
    float b = 1.0 - 2.0 * abs(0.5 - v);
    vec3 color = vec3(0.0);
    color = mix(uWaterColor, uEarthColor, v);
    color = mix(color, uBorderColor, b);
    return vec4(color, v);
}

void main() {
    vec4 color = baseColor();
    csm_DiffuseColor = vec4(color.rgb, 1.0);
}
