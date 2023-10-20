import * as THREE from './Three.js';
import * as SHADER from './Shader.js';
import * as BLIT from './Blit.js';
import * as UNIFORM from './Uniforms.js';


const renderer = new THREE.WebGLRenderer();
renderer.precision = 'highp'; // Highest precision does not change much
renderer.autoClear = false; // No need to clear- shader overwrites everything.

// Type MUST be float type or else texture screws up and stays in 0-1 range or something similar
const bufferA = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type:THREE.FloatType });
const bufferB = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type:THREE.FloatType });

var texture = new THREE.TextureLoader().load('Textures/noyse2.png');
texture.type = THREE.FloatType;
texture.flipY = false;
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.needsUpdate = true;

var source = bufferA;
var dest = bufferB;


// Define uniforms
var uniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
};

var particleUniforms = { 
    sourceTexture: { value: null },
    vectorTexture: { value: texture },
    resolution: { value: null},
    deltaTime: { value: null},
    frame: { value: null},
};

var imageMaterial = null;
var particleMaterial = null;


function RenderFrame(timestamp) 
{
    requestAnimationFrame(RenderFrame);

    if (!imageMaterial || !particleMaterial || !texture)
        return;

    UNIFORM.UpdateDefaultUniforms(timestamp);
    UNIFORM.SetUniforms(particleUniforms);

    // Swap source-dest
    var temp = source;
    source = dest;
    dest = temp;

    // Process particles
    BLIT.Blit(source, dest, renderer, particleMaterial);

    // Render output
    BLIT.Blit(dest, null, renderer, imageMaterial);
}


function OnResize()
{
    renderer.setSize(window.innerWidth, window.innerHeight);

    bufferA.setSize(window.innerWidth, window.innerHeight);
    bufferB.setSize(window.innerWidth, window.innerHeight);
}


function SwitchTheme(event)
{
    console.log(event.target.checked);
}


window.addEventListener('resize', OnResize, true);
document.getElementById('switchValue').onchange = SwitchTheme;

renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

SHADER.CreateMaterial('Shaders/Fragment.hlsl', uniforms, (material) => imageMaterial = material); 
SHADER.CreateMaterial('Shaders/DrawParticle.hlsl', particleUniforms, (material) => particleMaterial = material); 

OnResize();
RenderFrame();