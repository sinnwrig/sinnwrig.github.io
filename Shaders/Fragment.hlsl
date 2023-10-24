precision highp float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform vec3 background;
uniform vec3 color;


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    float fade = texture2D(sourceTexture, fragCoord / resolution.xy).z;

    fragColor.w = 1.0;
    fragColor.xyz = mix(background, color, fade);
}


void main() 
{
    mainImage(gl_FragColor, gl_FragCoord.xy); 
}
