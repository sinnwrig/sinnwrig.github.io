uniform float deltaTime;
uniform vec3 resolution;
uniform sampler2D sourceTexture;
          
uniform vec2 mousePosition;
uniform vec2 mouseDelta;

uniform float falloff;
uniform float fadeSpeed;
          
#define PI 3.1415926538


#include "Shaders/Include/Util.hlsl"
          

float Remap01(float v, float minOld, float maxOld) 
{
	return clamp((v - minOld) / (maxOld - minOld), 0.0, 1.0);
}
          
          
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{         
    vec2 uv = fragCoord.xy; 
    vec2 mouse = mousePosition * resolution.xy;
    vec2 lastMouse = mouseDelta * resolution.xy;

    float dist = (dist2Line(mouse, lastMouse, uv) / resolution.y) * 100.0;

    // Exponential falloff from cursor
    float influence = exp(dist / falloff);
    
    // Direction vector strength is determined by distance
    vec2 dir = normalize(mouse - lastMouse) * influence;
          
    // Convert to 
    float direction = atan(dir.y, dir.x);
    
    direction = Remap01(direction, -PI, PI);
          
    vec4 prevColor = texture(sourceTexture, uv / resolution.xy);
    prevColor.y -= deltaTime * fadeSpeed;       
    
    direction = mix(prevColor.x, direction, influence);
    influence = max(influence, prevColor.y);
    
    fragColor = vec4(direction, influence, 0.0, 0.0);
}