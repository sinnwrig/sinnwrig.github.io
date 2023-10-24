import { Texture } from "../Utility/Texture.js";
import * as BLIT from "../Utility/Blit.js";
import { Vector3 } from "../Utility/Vectors.js";
import * as DEFAULTS from "../Utility/Defaults.js";
import { Shader } from "../Utility/Shader.js";
import * as CONTEXT from '../Utility/Context.js'


var canvas = document.getElementById("ogl-canvas");
var gl = CONTEXT.AutoGetContext(canvas);


const nearest = WebGLRenderingContext.NEAREST, floatType = WebGLRenderingContext.FLOAT;
const bufferA = new Texture(1, 1, { minFilter: nearest, magFilter: nearest, type:floatType, isRenderTexture: true });
const bufferB = new Texture(1, 1, { minFilter: nearest, magFilter: nearest, type:floatType, isRenderTexture: true });

var source = bufferA;
var dest = bufferB;

const offWhite = new Vector3(0.9, 0.9, 0.9);
const offBlack = new Vector3(0.1, 0.1, 0.1);

// Define uniforms
var uniforms = {
    sourceTexture: { value: null },
    resolution: { value: new Vector3(1, 1, 1) },
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

var imageShader = null;
var particleShader = null;


function RenderFrame(timestamp) 
{
    requestAnimationFrame(RenderFrame);

    if (!imageShader || !particleShader)
        return;

    DEFAULTS.UpdateDefaults(timestamp);
    DEFAULTS.SetUniforms(particleUniforms);

    // Swap source-dest
    var temp = source;
    source = dest;
    dest = temp;

    // Process particles
    BLIT.Blit(gl, source, dest, particleShader);

    // Render output
    BLIT.Blit(gl, dest, canvas, imageShader);
}  
  

function OnResize() 
{
    canvas.width = DEFAULTS.resolution.x;
    canvas.height = DEFAULTS.resolution.y;

    bufferA.SetSize(gl, canvas.width, canvas.height);
    bufferB.SetSize(gl, canvas.width, canvas.height);
};


function SwitchTheme(event)
{   
    let checked = event.target.checked;

    uniforms.background.value = checked ? offBlack : offWhite;
    uniforms.color.value = checked ? offWhite : offBlack;

    console.log(checked);
}


document.getElementById('switchValue').onchange = SwitchTheme;
window.addEventListener('resize', OnResize, true);
OnResize();


Shader.LoadFromFile(gl, null, "/Shaders/DrawParticle.hlsl", particleUniforms).then((shader) => particleShader = shader);
Shader.LoadFromFile(gl, null, "/Shaders/Fragment.hlsl", uniforms).then((shader) => imageShader = shader);


BLIT.InitBlit(gl);
RenderFrame();
