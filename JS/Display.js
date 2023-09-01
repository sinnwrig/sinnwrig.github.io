import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';

var mousePos = new THREE.Vector2();
var lastMouse = new THREE.Vector2();
var resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);

function onDocumentMouseMove(event)
{   
    lastMouse = mousePos.clone();
  
    mousePos.x = (event.offsetX / resolution.x);
    mousePos.y = 1 - (event.offsetY / resolution.y);
}
 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
  
var uniforms = {
    time: { value: 0 },
    resolution: { value: resolution }, 
    flowTexture: { value: null },
    lightMode: { value: 0 }
};


document.getElementById("switchValue").onchange = function(event) 
{
    uniforms.lightMode.value = event.target.checked ? 1 : 0;
    console.log(event.target.checked);
}
  
const bufferScene = new THREE.Scene();
const bufferTarget = new THREE.WebGLRenderTarget(resolution.x, resolution.y, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
bufferTarget.autoClear = false;

const tempScene = new THREE.Scene();
const tempTarget = new THREE.WebGLRenderTarget(resolution.x, resolution.y, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});


var bufferUniforms = { 
    deltaTime: { value: 0 },
    resolution: { value: resolution },
    flowTexture: { value: null },
    mousePosition: { value: mousePos },
    lastPosition: { value: lastMouse }
};

var tempUniforms = {
    sourceTexture: { value: null },
    resolution: { value: resolution }
};

const camera = new THREE.PerspectiveCamera(45, resolution.z, 0.001, 1);
camera.position.set(0, 0, 1);

const fullscreenMeshes = []; 


window.onresize = () => {
    resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);
  
    camera.aspect = resolution.z;
    camera.updateProjectionMatrix();
    renderer.setSize(resolution.x, resolution.y);

    bufferTarget.setSize(resolution.x, resolution.y);
    tempTarget.setSize(resolution.x, resolution.y);

    for (let i = 0; i < fullscreenMeshes.length; i++) 
    {
        fullscreenMeshes[i].scale.set(resolution.z, 1, 1);
    }

    uniforms.resolution.value = resolution;
    bufferUniforms.resolution.value = resolution;
    tempUniforms.resolution.value = resolution;
}


const start = Date.now() / 1000;

function SceneTime()
{
    return (Date.now() / 1000) - start;
}

var deltaTime;

function RenderFrame() 
{
    requestAnimationFrame(RenderFrame);
    
    if (lastMouse.lengthSq() == 0.0) 
    {
        lastMouse = mousePos.clone();
    }
  
    let time = SceneTime();
  
    tempUniforms.sourceTexture.value = bufferTarget.texture; 
    renderer.setRenderTarget(tempTarget);
    renderer.render(tempScene, camera); 
      
    bufferUniforms.deltaTime.value = time - deltaTime;  
    deltaTime = time; 

    bufferUniforms.flowTexture.value = tempTarget.texture;
    bufferUniforms.mousePosition.value = mousePos; 
    bufferUniforms.lastPosition.value = lastMouse;

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
    planeMesh.scale.set(resolution.z, 1, 1);
        
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
    planeMesh.scale.set(resolution.z, 1, 1);
        
    bufferScene.add(planeMesh);
    fullscreenMeshes.push(planeMesh);

    return planeMesh;
}


function AddTempPlane(shader)
{
    const planeGeometry = new THREE.PlaneGeometry();
    
    const planeMaterial = new THREE.ShaderMaterial( {
        uniforms: tempUniforms,
        fragmentShader: shader
    } );

    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.scale.set(resolution.z, 1, 1);
        
    tempScene.add(planeMesh);
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
    //shader = document.getElementById("shader-1").textContent;
  
    AddFullscreenPlane(shader);
}); 


LoadShader('https://sinnwrig.github.io/Shaders/FlowTexture.hlsl').then((shader) => {
    //shader = document.getElementById("shader-2").textContent;
  
    AddBufferPlane(shader); 
});


LoadShader('https://sinnwrig.github.io/Shaders/Blit.hlsl').then((shader) => {
    //shader = document.getElementById("shader-3").textContent;
  
    AddTempPlane(shader); 
});
 