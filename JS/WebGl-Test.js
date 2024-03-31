import * as BLIT from "../Utility/Blit.js";
import { Vector2, Vector3, Vector4 } from "../Utility/Vectors.js";
import * as DEFAULTS from "../Utility/Defaults.js";
import { Shader } from "../Utility/Shader.js";
import * as CONTEXT from '../Utility/Context.js'
import { RenderBuffer } from "../Utility/RenderBuffer.js";
import * as COLOR from "../Utility/ColorUtil.js"


// Get canvas and WebGL context
var canvas = document.getElementById("ogl-canvas");
var gl = CONTEXT.AutoGetContext(canvas);


const nearFilter = WebGLRenderingContext.NEAREST;
const floatTex = WebGLRenderingContext.FLOAT;

// Get buffers
const particleBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:floatTex });
const mouseBuffer = new RenderBuffer(1, 1, { minFilter: nearFilter, magFilter: nearFilter, type:floatTex });


// Final image shader
var imageUniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    color: { value: null }
};
var imageShader = await Shader.LoadFromFile(gl, null, "/Shaders/Fragment.glsl", imageUniforms);


var mouseUniforms = {
    sourceTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },
    mousePos: { value: null },
    mouseDelta: { value: null },

    dragFalloff: { value: 0.15 },
    attractionFalloff: { value: 0.005 },
    fadeSpeed: { value: 0.25 }
};
var mouseShader = await Shader.LoadFromFile(gl, null, "/Shaders/FlowTexture.glsl", mouseUniforms);


// Particle buffer shader
var particleUniforms = { 
    sourceTexture: { value: null },
    vectorTexture: { value: null },
    resolution: { value: null },
    deltaTime: { value: null },
    frame: { value: null },

    distribution: { value: 0 }, // Particle distribution
    density: { value: 0.000001 }, // Global particle density
    fadeSpeed: { value: 1.5 }, // units/s at which trails fade
    noiseScale: { value: 2.0 }, // Noise sample scale
    particleSize: { value: 0.5}, // Particle size - Larger size will make particles coagulate, smaller size causes particles to dissapear.
    particleSpeed: { value: 0.5 }, // Speed at which particles move. Larger values reduce performance as shader needs to sample further away to compensate for additional particle movement.
    directionParams: { value: new Vector3(0, -1, 0.05) }, // x/y is default particle directon. z is blend between default and noise.

    boxFade: { value: 15 },
    boxRect: { value: new Vector4(DEFAULTS.resolution.x * 0.25, DEFAULTS.resolution.y * 0.25, DEFAULTS.resolution.x * 0.5, DEFAULTS.resolution.y * 0.5) }
};
var particleShader = await Shader.LoadFromFile(gl, null, "/Shaders/DrawParticle.glsl", particleUniforms);


function RenderFrame(timestamp) 
{
    requestAnimationFrame(RenderFrame);

    UpdateStyle();

    if (!imageShader || !particleShader)
        return;

    DEFAULTS.UpdateDefaults(timestamp);
    DEFAULTS.SetUniforms(particleUniforms);
    DEFAULTS.SetUniforms(mouseUniforms);

    mouseBuffer.Render(gl, mouseShader);

    particleUniforms.vectorTexture.value = mouseBuffer.RenderTexture();
    particleUniforms.boxRect.value = new Vector4(DEFAULTS.resolution.x * 0.25, DEFAULTS.resolution.y * 0.25, DEFAULTS.resolution.x * 0.5, DEFAULTS.resolution.y * 0.5);
    particleBuffer.Render(gl, particleShader);

    // Render output
    BLIT.Blit(gl, particleBuffer.RenderTexture(), canvas, imageShader);
}  



function FormatBytes(bytes, decimals = 2) 
{
    if (!bytes) 
        return '0 Bytes';

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


var modeToggle = document.getElementById('modeSwitch');

function UpdateStyle()
{
    let style = getComputedStyle(document.body);
    let textHex = style.getPropertyValue('--midgroundColor');

    let textCol = COLOR.CSSToRGBA(textHex);

    imageUniforms.color.value = textCol;
}

// Manual switch callback
modeToggle.addEventListener('change', (ev) => 
{
    document.body.setAttribute("color-theme", ev.target.checked ? "dark" : "light");
});

// Is user theme dark mode?
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
{
    modeToggle.checked = true;
    document.body.setAttribute("color-theme", "dark");
}

// User theme switch callback
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (ev) => 
{
    modeToggle.checked = ev.matches;
    document.body.setAttribute("color-theme", ev.matches ? "dark" : "light");
});


DEFAULTS.resizeCallbacks.Add(OnResize);
DEFAULTS.Setup(canvas);

RenderFrame();
