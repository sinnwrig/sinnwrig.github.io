precision highp float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform float frame;
uniform vec2 mousePos;
uniform vec2 mouseDelta;

uniform float dragFalloff;
uniform float attractionFalloff;
uniform float fadeSpeed;

#define PI 3.141592653589793


float dist2Line(vec2 a, vec2 b, vec2 p) 
{ 
    p -= a;
    b -= a;
	float h = clamp(dot(p, b) / dot(b, b), 0.0, 1.0); 
	return length(p - b * h);                       
}


float falloff(float value, float falloff)
{
    return smoothstep(1.0, 0.0, value / falloff);
}
 
          
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{         
    vec2 uv = fragCoord.xy; 
    vec2 mouse = mousePos * resolution.xy;
    vec2 lastMouse = mouseDelta * resolution.xy;

    // Distance to the line created between the previous and current mouse drag, scaled by viewport height
    float dist = dist2Line(mouse, lastMouse, uv) / resolution.y;

    float influence = falloff(dist, dragFalloff);
    float inVecInfluence = falloff(dist, attractionFalloff);

    vec2 dragDir = mouse - lastMouse;
    vec2 toMouse = mouse - uv;
    vec2 direction = normalize(mix(toMouse, dragDir, inVecInfluence));
          
    vec3 values = texture2D(sourceTexture, uv / resolution.xy).xyz;

    // Fade previous color
    values.z = max(0.0, values.z - (deltaTime * fadeSpeed));       
    values.z = max(influence, values.z);

    values.xy = mix(values.xy, direction, influence);

    fragColor.xyz = values;
}


void main(void) { mainImage(gl_FragColor, gl_FragCoord.xy); }
