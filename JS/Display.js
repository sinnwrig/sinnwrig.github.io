import * as THREE from './Three.js';
import * as SHADER from './Shader.js';
import * as BLIT from './Blit.js';
import * as UNIFORM from './Uniforms.js';

var white = new THREE.Vector3(1, 1, 1);
var black = new THREE.Vector3(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
  
const bufferTarget = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
bufferTarget.autoClear = false;

const tempTarget = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});


// Define uniforms
var uniforms = {
    sourceTexture: { value: null },
    lineColor: { value: black },
    background: { value: white },
    lineWidth: { value: 0.1 },
    blur: { value : 10 }
};

var imageMaterial = null;

var bufferUniforms = { 
    sourceTexture: { value: null },
    falloff: { value: -12.0 },
    fadeSpeed: { value: 0.25 },
};

var bufferMaterial = null;

function RenderFrame() 
{
    requestAnimationFrame(RenderFrame);

    BLIT.Blit(bufferTarget, tempTarget, renderer);

    UNIFORM.SetUniforms(bufferUniforms);
    BLIT.Blit(tempTarget, bufferTarget, renderer, bufferMaterial);
    
    UNIFORM.SetUniforms(uniforms);
    BLIT.Blit(bufferTarget, null, renderer, imageMaterial);
}


function OnResize()
{
    renderer.setSize(window.innerWidth, window.innerHeight);
    bufferTarget.setSize(window.innerWidth, window.innerHeight);
    tempTarget.setSize(window.innerWidth, window.innerHeight);
}


function SwitchTheme(event)
{
    var checked = event.target.checked;

    uniforms.lineColor.value = checked ? white : black;
    uniforms.background.value = checked ? black : white;

    console.log(checked);
}


document.getElementById("switchValue").onchange = SwitchTheme;

renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
document.body.appendChild(renderer.domElement);


SHADER.CreateMaterial('Shaders/Fragment.hlsl', uniforms, (material) => imageMaterial = material); 
SHADER.CreateMaterial('Shaders/FlowTexture.hlsl', bufferUniforms, (material) => bufferMaterial = material);


OnResize();
RenderFrame();