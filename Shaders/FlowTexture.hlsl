uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform vec2 mousePos;
uniform vec2 mouseDelta;

#define falloff 5.0
#define fadeSpeed 0.9
          

#include "Shaders/Include/Math.hlsl"


float Remap01(float v, float minOld, float maxOld) 
{
	return clamp((v - minOld) / (maxOld - minOld), 0.0, 1.0);
}
          
          
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{         
    vec2 uv = fragCoord.xy; 
    vec2 mouse = mousePos * resolution.xy;
    vec2 lastMouse = mouseDelta * resolution.xy;

    // Distance to the line created between the previous and current mouse drag
    float dist = (dist2Line(mouse, lastMouse, uv) / resolution.y) * 100.0;

    // Exponential falloff from cursor
    float influence = exp(dist / falloff);
    
    // Direction vector strength is determined by distance
    vec2 dir = normalize(mouse - lastMouse) * influence;
          
    // Convert to angle
    float direction = atan(dir.y, dir.x);
    
    // Convert to 0-1 range
    direction = (direction + PI) / (PI * 2.0);
          
    vec4 prevColor = texture(sourceTexture, uv / resolution.xy);

    // Fade previous color
    prevColor.y -= deltaTime * fadeSpeed;       

    direction = mix(prevColor.x, direction, influence);
    influence = max(influence, prevColor.y);
    
    fragColor = vec4(direction, influence, 0.0, 0.0);
}