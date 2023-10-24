import { Texture } from "../Utility/Texture.js";
import * as BLIT from "../Utility/Blit.js";
import { Vector3, Vector4 } from "../Utility/Vectors.js";
import * as DEFAULTS from "../Utility/Defaults.js";
import { Shader } from "../Utility/Shader.js";
import * as CONTEXT from '../Utility/Context.js'
import { RenderBuffer } from "../Utility/RenderBuffer.js";


// Get canvas and WebGL context
var canvas = document.getElementById("ogl-canvas");
var gl = CONTEXT.AutoGetContext(canvas);


const nearFilter = WebGLRenderingContext.NEAREST;

// Get buffers
const particleBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:WebGLRenderingContext.FLOAT });
const mouseBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:WebGLRenderingContext.FLOAT  });


const offWhite = new Vector3(0.9, 0.9, 0.9);
const offBlack = new Vector3(0.1, 0.1, 0.1);


// Final image shader
var imageShader = null;
var uniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    background: { value: offWhite },
    color: { value: offBlack }
};
Shader.LoadFromFile(gl, null, "/Shaders/Fragment.hlsl", uniforms).then((shader) => imageShader = shader);


var mouseShader = null;
var mouseUniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },
    mousePos: { value: null },
    mouseDelta: { value: null },
};
Shader.LoadFromFile(gl, null, "/Shaders/FlowTexture.hlsl", mouseUniforms).then((shader) => mouseShader = shader);


// Particle buffer shader
var particleShader = null;
var particleUniforms = { 
    sourceTexture: { value: null },
    vectorTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },

    distribution: { value: 0.0002 }, // Particle distribution
    density: { value: 0.005 }, // Global particle density
    fadeSpeed: { value: 2.0 }, // units/s at which trails fade
    noiseScale: { value: 2.0 }, // Noise sample scale
    particleSize: { value: 0.5}, // Particle size - Larger size will make particles coagulate, smaller size causes particles to dissapear.
    particleSpeed: { value: 0.75 }, // Speed at which particles move. Larger values reduce performance as shader needs to sample further away to compensate for additional particle movement.
};
Shader.LoadFromFile(gl, null, "/Shaders/DrawParticle.hlsl", particleUniforms).then((shader) => particleShader = shader);


function RenderFrame(timestamp) 
{
    requestAnimationFrame(RenderFrame);

    if (!imageShader || !particleShader)
        return;

    DEFAULTS.UpdateDefaults(timestamp);
    DEFAULTS.SetUniforms(particleUniforms);
    DEFAULTS.SetUniforms(mouseUniforms);

    mouseBuffer.Render(gl, mouseShader);

    particleUniforms.vectorTexture.value = mouseBuffer.RenderTexture();
    particleBuffer.Render(gl, particleShader);

    // Render output
    BLIT.Blit(gl, particleBuffer.RenderTexture(), canvas, imageShader);
}  


DEFAULTS.resizeCallbacks.Add((width, height) => 
{
    particleBuffer.SetSize(gl, width, height);
    mouseBuffer.SetSize(gl, width, height);
});

DEFAULTS.Setup(canvas);

document.getElementById('switchValue').onchange = (event) =>
{
    uniforms.background.value = event.target.checked ? offBlack : offWhite;
    uniforms.color.value = event.target.checked ? offWhite : offBlack;
};

RenderFrame();
