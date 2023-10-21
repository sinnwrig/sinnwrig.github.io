import * as THREE from './Three.js';
import * as SHADER from './Shader.js';
import * as BLIT from './Blit.js';
import * as UNIFORM from './Uniforms.js';

const renderer = new THREE.WebGLRenderer();
renderer.autoClear = false;

const bufferA = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type:THREE.FloatType });
bufferA.autoClear = false;
const bufferB = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type:THREE.FloatType });
bufferB.autoClear = false;

var source = bufferA;
var dest = bufferB;


const offWhite = new THREE.Vector3(0.9, 0.9, 0.9);
const offBlack = new THREE.Vector3(0.1, 0.1, 0.1);


// Define uniforms
var uniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    background: { value: offWhite },
    color: { value: offBlack }
};

var particleUniforms = { 
    sourceTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },

    distribution: { value: 0.0002 }, // Particle distribution
    density: { value: 0.005 }, // Global particle density
    fadeSpeed: { value: 2.0 }, // u/s at which trails fade
    noiseScale: { value: 2.0 }, // Noise sample scale
    particleSize: { value: 0.5}, // Particle size - Larger size will make particles coagulate, smaller size causes particles to dissapear.
    particleSpeed: { value: 2.0 }, // Speed at which particles move. Larger values reduce performance as shader needs to sample further away to compensate for additional particle movement.
};

var imageMaterial = null;
var particleMaterial = null;

var frameCount = 0;


function RenderFrame(timestamp) 
{
    requestAnimationFrame(RenderFrame);

    if (!imageMaterial || !particleMaterial)
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

    frameCount++;
}


function OnResize()
{
    renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);

    bufferA.setSize(window.innerWidth, window.innerHeight);
    bufferB.setSize(window.innerWidth, window.innerHeight);
}


function SwitchTheme(event)
{   
    let checked = event.target.checked;

    uniforms.background.value = checked ? offBlack : offWhite;
    uniforms.color.value = checked ? offWhite : offBlack;

    console.log(checked);
}

window.addEventListener('resize', OnResize, true);
document.getElementById('switchValue').onchange = SwitchTheme;
document.body.appendChild(renderer.domElement);

SHADER.CreateMaterial('Shaders/Fragment.hlsl', uniforms, (material) => imageMaterial = material); 
SHADER.CreateMaterial('Shaders/DrawParticle.hlsl', particleUniforms, (material) => particleMaterial = material); 

OnResize();
RenderFrame();

function DebugAvgFramerate()
{
    console.log(frameCount / 5);
    frameCount = 0;
}

setInterval(DebugAvgFramerate, 5000);