precision mediump float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform vec3 background;
uniform vec3 color;


void main() 
{
    float fade = texture2D(sourceTexture, gl_FragCoord.xy / resolution.xy).z;

    gl_FragColor.w = 1.0;
    gl_FragColor.xyz = mix(background, color, fade);
}