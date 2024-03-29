precision mediump float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform vec4 color;


void main() 
{
    float fade = texture2D(sourceTexture, gl_FragCoord.xy / resolution.xy).z;
    
    gl_FragColor = mix(vec4(0.0), color, fade);
}