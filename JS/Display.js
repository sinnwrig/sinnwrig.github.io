import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';

const shader = `
vec2 pos;
uniform float time;
uniform vec2 resolution;

#define LINE_W 0.1
#define AA 15.0 / resolution.y


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
    gl_FragColor = 1.0;
    return;

    vec2 uv = gl_FragCoord.xy;
    vec3 color = 0.0;

    u = (uv - resolution.xy * .5) / resolution.y;
    vec2 u2 = uv;   
       
    uv *= 2.0;
    float f = noise(vec3(uv * 2.0, time));
    color = vec4(cell(rotate2D(fract(uv * 16.) - 0.5, f * 6.2831)));
        
    // 24 by 12 border.
    if (abs(u2.x * 16.0) > 12.0 || abs(u2.y * 16.0) > 6.0) 
    {
        color = 0.0;
    }

    gl_FragColor = color;
}`;
            
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const planeGeometry = new THREE.PlaneGeometry();
const planeMaterial = new THREE.ShaderMaterial({ 
    uniforms: {
        time: {value: 1},
        resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) }
    }, 
    fragmentShader: shader 
});

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
			
planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
scene.add(planeMesh);
    
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 1);
scene.add(camera);
    
window.onresize = () => 
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
    planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
    planeMaterial.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
}

const start = Date.now() / 1000;

var mousePos = new THREE.Vector2(0, 0);
mousePos.x /= window.innerWidth;
mousePos.y /= window.innerHeight;


document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    var eventDoc, doc, body;
			
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
				
        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
			
    mousePos.x = event.pageX / window.innerWidth;
	mousePos.y = event.pageY / window.innerHeight;
}


function animate() {
    requestAnimationFrame(animate);
    planeMaterial.uniforms.time.value = (Date.now() / 1000) - start;
    renderer.render(scene, camera);
}

animate();