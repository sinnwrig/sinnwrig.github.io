import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';


var mousePos = new THREE.Vector2(0, 0);
mousePos.x /= window.innerWidth;
mousePos.y /= window.innerHeight;


document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    var eventDoc, doc, body;
			
    if (event.pageX == null && event.clientX != null) 
    {  
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


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const bufferScene = new THREE.Scene();
const bufferTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});


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
    let resolution = new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
    bufferTarget.setSize(window.innerWidth, window.innerHeight);

    for (let i = 0; i < fullscreenMeshes.length; i++) 
    {
        fullscreenMeshes[i].scale.set(fullscreenScale, 1, 1);
    }

    scene.traverse(function(object)
    {
        if (object.material)
        {
            object.material.uniforms.resolution.value = resolution;
        }
    });

    bufferScene.traverse(function(object)
    {
        if (object.material)
        {
            object.material.uniforms.resolution.value = resolution;
        }
    });
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

    var mouseDirection = mousePos.sub(lastMouse).normalize();

    bufferScene.traverse(function(object)
    {
        if (object.material)
        {
            object.material.uniforms.time.value = time;
            object.material.uniforms.mousePosition.value = mousePos;
            object.material.uniforms.dragDirection.value = mouseDirection;
        }
    });

    renderer.setRenderTarget(bufferTarget);
    renderer.render(bufferScene, camera);
    
    scene.traverse(function(object) 
    {
        if (object.material) 
        {
            object.material.uniforms.time.value = time;
            object.material.uniforms.flowTexture.value = bufferTarget.texture;
        }
    });
    
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
}
  
RenderFrame();


function AddFullscreenPlane(shader)
{
    const planeGeometry = new THREE.PlaneGeometry();

    let time = SceneTime();
    
    const planeMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            time: { value: time },
            resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
            flowTexture: { value: bufferTarget }
        },
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

    let time = SceneTime();
    
    const planeMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            time: { value: time },
            resolution: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
            mousePosition: { value: mousePos },
            dragDirection: { value: new THREE.Vector2(0, 0) }
        },
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
    AddFullscreenPlane(shader);
});
 

LoadShader('https://sinnwrig.github.io/Shaders/FlowTexture.hlsl').then((shader) => {
    AddBufferPlane(shader); 
});
