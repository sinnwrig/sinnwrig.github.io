import * as ThreeJS from 'https://cdn.skypack.dev/ThreeJS@0.129.0';

var shader;

$.get('/docs/file.txt', {}, function(content) { shader = content });
            
const renderer = new ThreeJS.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const shaderUniforms = 
{
	time: {value: 1},
    resolution: { value: new ThreeJS.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
};
    
const scene = new ThreeJS.Scene();
const planeGeometry = new ThreeJS.PlaneGeometry();
const planeMaterial = new ThreeJS.ShaderMaterial({ uniforms: shaderUniforms, fragmentShader: shader });

const planeMesh = new ThreeJS.Mesh(planeGeometry, planeMaterial);
			
planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
scene.add(planeMesh);
    
const camera = new ThreeJS.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 0);
scene.add(camera);
    
window.onresize = () => 
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
    planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
    planeMaterial.uniforms.resolution.value = new ThreeJS.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
}

const start = Date.now() / 1000;

var mousePos = new ThreeJS.Vector2(window.event.clientX, window.event.clientY);
mousePos.x /= window.innerWidth;
mousePos.y /= window.innerHeight;


document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event;
			
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