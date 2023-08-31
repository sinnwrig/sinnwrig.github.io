import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';

var mousePos = new THREE.Vector2();

function onDocumentMouseMove(event)
{
    mousePos.x = (event.offsetX / window.innerWidth);
    mousePos.y = 1 - (event.offsetY / window.innerHeight);
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

var uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
    flowTexture: { value: null }
};

const bufferScene = new THREE.Scene();
const bufferTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});

var bufferUniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
    mousePosition: { value: mousePos },
    dragDirection: { value: new THREE.Vector2() }
};

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 1);
scene.add(camera);
bufferScene.add(camera);

const fullscreenMeshes = [];


window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);

    let fullscreenScale = window.innerWidth / window.innerHeight;
    let resolution = new THREE.Vector2(renderer.domElement.width, renderer.domElement.height);
  
    bufferTarget.setSize(window.innerWidth, window.innerHeight);

    for (let i = 0; i < fullscreenMeshes.length; i++) 
    {
        fullscreenMeshes[i].scale.set(fullscreenScale, 1, 1);
    }

    uniforms.resolution.value = resolution;
    bufferUniforms.resolution.value = resolution;
}


const start = Date.now() / 1000;

function SceneTime()
{
    return (Date.now() / 1000) - start;
}


var lastMouse = mousePos;
function RenderFrame() 
{
    requestAnimationFrame(RenderFrame);

    let time = SceneTime();

    var newMouse = mousePos.clone();
    var mouseDirection = newMouse.sub(lastMouse).normalize();

    bufferUniforms.time.value = time;
    bufferUniforms.mousePosition.value = mousePos;
    bufferUniforms.dragDirection.value = mouseDirection;

    renderer.setRenderTarget(bufferTarget);
    renderer.render(bufferScene, camera);
   
    uniforms.time.value = time;
    uniforms.flowTexture.value = bufferTarget.texture;
    
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
}
  
RenderFrame();


function AddFullscreenPlane(shader)
{
    const planeGeometry = new THREE.PlaneGeometry();
    
    const planeMaterial = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        fragmentShader: shader
    } );

    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
        
    scene.add(planeMesh);
    fullscreenMeshes.push(planeMesh);

    return planeMesh;
}


function AddBufferPlane(shader)
{
    const planeGeometry = new THREE.PlaneGeometry();
    
    const planeMaterial = new THREE.ShaderMaterial( {
        uniforms: bufferUniforms,
        fragmentShader: shader
    } );

    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.scale.set(window.innerWidth / window.innerHeight, 1, 1);
        
    bufferScene.add(planeMesh);
    fullscreenMeshes.push(planeMesh);

    return planeMesh;
}


async function LoadShader(url)
{
    const response = await fetch(url);
    const shader = await response.text();

    const segments = new URL(url).pathname.split('/');
    const last = segments.pop() || segments.pop();
    console.log('Loaded shader ' + last);
    return shader;
}

// Fetch fragment shader
LoadShader('https://sinnwrig.github.io/Shaders/Fragment.hlsl').then((shader) => {
    shader = document.getElementById("shader-1").textContent;
  
    AddFullscreenPlane(shader);
}); 


LoadShader('https://sinnwrig.github.io/Shaders/FlowTexture.hlsl').then((shader) => {
    shader = document.getElementById("shader-2").textContent;
  
    AddBufferPlane(shader); 
});
 