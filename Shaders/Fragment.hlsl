uniform float time;
uniform vec3 resolution;
uniform sampler2D flowTexture;
uniform float lightMode;

      
#define LINE_W 0.1
#define AA 15.0 / resolution.y
      
#define GRID_SCALE 24.0
#define GRID_X 24.0
#define GRID_Y 12.0



//3D gradient noise by Íñigo Quílez
vec3 hash(vec3 p)
{
	p = vec3( dot(p, vec3(127.1, 311.7, 74.7)),
			  dot(p, vec3(269.5, 183.3, 246.1)),
			  dot(p, vec3(113.5, 271.9, 124.6)));

	return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}


float noise(in vec3 p) 
{
    vec3 i = floor(p);
    vec3 f = fract(p);

	vec3 u = f * f * (3.0 - 2.0 * f);

    return mix( mix(mix(dot(hash(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0)), 
                        dot(hash(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0)), u.x),
                    mix(dot(hash(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0)), 
                        dot(hash(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0)), u.x), u.y),
                mix(mix(dot(hash(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0)), 
                        dot(hash(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0)), u.x),
                    mix(dot(hash(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0)), 
                        dot(hash(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z);
}


float dist2Line(vec2 a, vec2 b, vec2 p) 
{ 
    p -= a, b -= a;
	float h = clamp(dot(p, b) / dot(b, b), 0.0, 1.0); 
	return length(p - b * h);                       
}


vec2 rotate2D(vec2 _st, float _angle)
{
    _st =  mat2(cos(_angle),-sin(_angle), sin(_angle),cos(_angle)) * _st;
    return _st;
}


float cell(vec2 uv)
{
	return smoothstep(LINE_W + AA, LINE_W, dist2Line(vec2(-0.3, 0), vec2(0.3, 0), uv));
}


void main(void) 
{
    vec2 uv = gl_FragCoord.xy;
			
	uv = (uv - resolution.xy * 0.5) / resolution.y;
	vec2 u2 = uv;   
      
  vec4 color = vec4(0.0);
  
  vec4 flowInfo = texture(flowTexture, gl_FragCoord.xy / resolution.xy);
      
  uv *= 2.0;
	float f = noise(vec3(uv * 2.0, time));
  f = mix(f, flowInfo.x, flowInfo.y);
          
	color = vec4(cell(rotate2D(fract(uv * 16.0) - 0.5, f * 6.2831)));
          
  if (lightMode == 0.0) 
  {
      color = vec4(1.0) - color;        
  }
          
        
          
  gl_FragColor = color; 
}