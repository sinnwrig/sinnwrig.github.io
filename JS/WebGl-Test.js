import * as BLIT from "../Utility/Blit.js";
import { Vector4 } from "../Utility/Vectors.js";
import * as DEFAULTS from "../Utility/Defaults.js";
import { Shader } from "../Utility/Shader.js";
import * as CONTEXT from '../Utility/Context.js'
import { RenderBuffer } from "../Utility/RenderBuffer.js";
import * as COLOR from "../Utility/ColorUtil.js"


// Get canvas and WebGL context
var canvas = document.getElementById("ogl-canvas");
var gl = CONTEXT.AutoGetContext(canvas);


const nearFilter = WebGLRenderingContext.NEAREST;

// Get buffers
const particleBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:WebGLRenderingContext.FLOAT });
const mouseBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:WebGLRenderingContext.FLOAT });


// Final image shader
var imageShader = null;
var imageUniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    background: { value: null },
    color: { value: null }
};
Shader.LoadFromFile(gl, null, "/Shaders/Fragment.hlsl", imageUniforms).then((shader) => imageShader = shader);


var mouseShader = null;
var mouseUniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },
    mousePos: { value: null },
    mouseDelta: { value: null },

    dragFalloff: { value: 0.15 },
    attractionFalloff: { value: 0.05 },
    fadeSpeed: { value: 0.1 }
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



function FormatBytes(bytes, decimals = 2) 
{
    if (!+bytes) return '0 Bytes';

    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}


function OnResize(width, height)
{
    particleBuffer.SetSize(gl, width, height, new Vector4(0.0, 0.0, 0.0, 0.0));
    mouseBuffer.SetSize(gl, width, height, new Vector4(0.0, 0.0, 0.0, 0.0));

    // 4 channels * size of float * texture count (2 textures per buffer)
    let bytesPerPixel = 4 * 4 * 4;
    
    let size = width * height * bytesPerPixel;

    console.log(`Estimated VRAM usage: ${FormatBytes(size)}`);
}


function UpdateStyle()
{
    let style = getComputedStyle(document.body);
    let backgroundHex = style.getPropertyValue('--backgroundColor');
    let textHex = style.getPropertyValue('--text');

    let backCol = COLOR.HexToRgb(backgroundHex);
    let textCol = COLOR.HexToRgb(textHex);
    
    imageUniforms.background.value = backCol;
    imageUniforms.color.value = textCol;
}


document.getElementById('switchValue').onchange = (event) =>
{
    document.body.setAttribute("color-theme", event.target.checked ? "dark" : "light");
    UpdateStyle();
};


DEFAULTS.resizeCallbacks.Add(OnResize);
DEFAULTS.Setup(canvas);

UpdateStyle();
RenderFrame();
