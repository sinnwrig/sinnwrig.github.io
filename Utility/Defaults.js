import { Vector2, Vector3 } from './Vectors.js'; 
import { CallbackList } from './CallbackList.js';

// Utilities for setting commonly used uniform values

export var resolution = new Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);

export var time = undefined;
export var lastTime = undefined
export var deltaTime = 0.0;
export var frame = -1;

export var mousePos = new Vector2(0.01, 0.0);
export var mouseDelta = new Vector2(0.0, 0.0);

export var canvas = undefined;
export var resizeCallbacks = new CallbackList();


export function SetUniforms(uniforms)
{
    if (uniforms.resolution !== undefined)
        uniforms.resolution.value = resolution;

    if (uniforms.time !== undefined)
        uniforms.time.value = time;

    if (uniforms.frame !== undefined)
        uniforms.frame.value = frame;
    
    if (uniforms.deltaTime !== undefined)
        uniforms.deltaTime.value = deltaTime;

    if (uniforms.mousePos !== undefined)
        uniforms.mousePos.value = mousePos;

    if (uniforms.mouseDelta !== undefined)
        uniforms.mouseDelta.value = mouseDelta;
}


export function UpdateDefaults(timestamp)
{
    timestamp /= 1000;

    lastTime = time;
    time = timestamp;
    deltaTime = time - lastTime;

    frame++;
}


function GetCursorPosition(event)
{
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    return new Vector2(x / rect.width, 1 - (y / rect.height));
}

function OnCanvasMouseMove(event)
{   
    mouseDelta = mousePos.Clone();
    mousePos = GetCursorPosition(event);
}


function OnMouseEnter(event)
{
    mousePos = GetCursorPosition(event);
    mouseDelta = mousePos.Clone();
}


export function OnResize()
{
    let pixelRatio = window.devicePixelRatio || 1;

    var positionInfo = canvas.getBoundingClientRect();

    var width = positionInfo.width * pixelRatio;
    var height = positionInfo.height * pixelRatio;

    resolution = new Vector3(width, height, width / height);

    canvas.width = width;
    canvas.height = height;

    resizeCallbacks.Invoke(width, height);
}


export function Setup(outputCanvas)
{
    canvas = outputCanvas;

    canvas.addEventListener('mousemove', OnCanvasMouseMove, true);
    canvas.addEventListener('mouseenter', OnMouseEnter, true);
    window.addEventListener('resize', OnResize, true);

    OnResize();
}