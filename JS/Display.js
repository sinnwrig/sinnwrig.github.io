import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
            
const renderer = new THREE.WebGLRenderer();
    
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const planeGeometry = new THREE.PlaneGeometry();
const planeMaterial = new THREE.ShaderMaterial( {
    uniforms: {
        time: {value: 1},
        resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) }
    },
    fragmentShader: document.getElementById('fragmentShader').textContent
} );

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
scene.add(planeMesh);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 1);
scene.add(camera);

window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
    planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
    planeMaterial.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
}

const start = Date.now() / 1000;
function animate() {
    requestAnimationFrame(animate);
    planeMaterial.uniforms.time.value = (Date.now() / 1000) - start;
    renderer.render(scene, camera);
}

animate();


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