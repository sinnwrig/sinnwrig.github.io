precision highp float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform float frame;
uniform vec2 mousePos;
uniform vec2 mouseDelta;

#define MOUSE_FALLOFF 0.15
#define FADE 0.15

#define PI 3.141592653589793


float dist2Line(vec2 a, vec2 b, vec2 p) 
{ 
    p -= a;
    b -= a;
	float h = clamp(dot(p, b) / dot(b, b), 0.0, 1.0); 
	return length(p - b * h);                       
}


float falloff(float value)
{
    return smoothstep(1.0, 0.0, value / MOUSE_FALLOFF);
}
 
          
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{         
    vec2 uv = fragCoord.xy; 
    vec2 mouse = mousePos * resolution.xy;
    vec2 lastMouse = mouseDelta * resolution.xy;

    // Distance to the line created between the previous and current mouse drag, scaled by viewport height
    float dist = dist2Line(mouse, lastMouse, uv) / resolution.y;

    // Exponential falloff from cursor
    float influence = falloff(dist);

    vec2 direction = normalize(mouse - lastMouse);
          
    vec3 values = texture2D(sourceTexture, uv / resolution.xy).xyz;

    // Fade previous color
    values.z -= deltaTime * FADE;       
    values.z = max(influence, values.z);

    values.xy = mix(values.xy, direction, influence);

    fragColor.xyz = values;

    // Clear buffer if on the first frame
    if (frame < 1.0)
    {
        fragColor.xy = direction;
        fragColor.z = 0.0;
    }
}


void main(void) { mainImage(gl_FragColor, gl_FragCoord.xy); }