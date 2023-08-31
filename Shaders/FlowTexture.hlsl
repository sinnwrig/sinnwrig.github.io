uniform float time;
uniform vec2 resolution;

uniform vec2 mousePosition;
uniform vec2 dragDirection;


void main(void) 
{
    vec2 uv = gl_FragCoord.xy;
    
    nMouse = mousePosition / resolution;
    float mouseDist = length(uv - nMouse);

    gl_FragColor = vec4(1.0, 0.5, 0.5, 0.0) + (vec4(0.0, 0.5, 0.5, 0.0) / mouseDist);
}