uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform vec3 background;
uniform vec3 color;


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec4 fade = texture2D(sourceTexture, fragCoord / resolution.xy);

    fragColor.xyz = mix(background, color, fade.z);
}
