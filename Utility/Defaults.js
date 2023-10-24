// Utilities for setting commonly used uniform values.

import { Vector2, Vector3 } from './Vectors.js'; 


export var resolution = new Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);

export var time = undefined;
export var lastTime = undefined
export var deltaTime = 0.0;
export var frame = -1;

export var mousePos = new Vector2();
export var mouseDelta = new Vector2();


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
    frame += 1;
}


function OnDocumentMouseMove(event)
{   
    mouseDelta.x = mousePos.x;
    mouseDelta.y = mousePos.y;
  
    mousePos.x = (event.offsetX / window.innerWidth);
    mousePos.y = 1 - (event.offsetY / window.innerHeight);
}


export function OnResize()
{
    let pixelRatio = window.devicePixelRatio || 1;
    let width = window.innerWidth * pixelRatio;
    let height = window.innerHeight * pixelRatio;

    resolution = new Vector3(width, height, width / height);
}


window.addEventListener('mousemove', OnDocumentMouseMove, true);
window.addEventListener('resize', OnResize, true);

OnResize();