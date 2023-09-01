uniform sampler2D sourceTexture;
uniform vec2 resolution;

void main(void) 
{             
    gl_FragColor = texture(sourceTexture, gl_FragCoord.xy / resolution.xy);
}