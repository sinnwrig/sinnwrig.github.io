uniform float deltaTime;
uniform vec3 resolution;
uniform sampler2D flowTexture;
          
uniform vec2 mousePosition;
uniform vec2 lastPosition;
          
#define PI 3.1415926538

#define FALLOFF -25.0
#define FADE_SPEED 0.5
          
float dist2Line(vec2 a, vec2 b, vec2 p) 
{ 
    p -= a, b -= a;
	float h = clamp(dot(p, b) / dot(b, b), 0.0, 1.0); 
	return length(p - b * h);                       
}
          

float Remap01(float v, float minOld, float maxOld) 
{
	  return clamp((v - minOld) / (maxOld - minOld), 0.0, 1.0);
}
          
          
void main(void) 
{         
    vec2 uv = gl_FragCoord.xy; 
    vec2 mouse = mousePosition * resolution.xy;
    vec2 lastMouse = lastPosition * resolution.xy;
          
    float dist = (dist2Line(mouse, lastMouse, uv) / resolution.y) * 100.0;
    float influence = exp(dist / FALLOFF);
          
    vec2 dir = normalize(mouse - lastMouse) * influence;
          
    float direction = atan(dir.y, dir.x);
    
    direction = Remap01(direction, -PI, PI);
          
    vec4 prevColor = texture(flowTexture, uv / resolution.xy);
    prevColor.y -= deltaTime * FADE_SPEED;       
    
    direction = mix(prevColor.x, direction, influence);
    influence = max(influence, prevColor.y);
    
    gl_FragColor = vec4(direction, influence, 0.0, 0.0);
}