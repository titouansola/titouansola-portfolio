uniform sampler2D uTexture;
uniform float uExtrusion;

varying vec2 vUv;
varying vec4 vTexture;

void main()
{
    vTexture = texture2D(uTexture, uv);
    vUv = uv;
    //
    float str = uExtrusion * vTexture.a;
    csm_Position = position + str * normal;
}
