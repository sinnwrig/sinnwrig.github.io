uniform float time;
uniform vec3 resolution;
uniform sampler2D sourceTexture;
uniform vec3 lineColor;
uniform vec3 background;
uniform float lineWidth;
uniform float blur;

#define STRAND_SEGMENTS 6
#define AA blur / resolution.y

#include "Shaders/Include/Math.hlsl"


float cell(vec2 uv)
{
	return smoothstep(lineWidth + AA, lineWidth, dist2Line(vec2(-0.3, 0), vec2(0.3, 0), uv));
}


void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord.xy;
			
	uv = (uv - resolution.xy * 0.5) / resolution.y;
	vec2 u2 = uv;  
  
  	vec4 flowInfo = texture(sourceTexture, fragCoord.xy / resolution.xy);
      
  	uv *= 2.0;
	float f = noise(vec3(uv * 2.0, time));
  	f = mix(f, flowInfo.x, flowInfo.y);
          
	float value = cell(rotate2D(fract(uv * 16.0) - 0.5, f * 6.2831));

  	fragColor = vec4(mix(background, lineColor, value), 1.0);
}
