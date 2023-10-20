uniform sampler2D sourceTexture;
uniform vec3 resolution;


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec3 fade = texture2D(sourceTexture, fragCoord / resolution.xy).xyz;
    fragColor.xyz = mix(vec3(0.9), vec3(0.05), fade.z);
}
