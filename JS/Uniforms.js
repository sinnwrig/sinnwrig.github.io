// Utilities for setting commonly used uniform values.

import * as THREE from './Three.js';


export var resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);

export var time = undefined;
export var lastTime = undefined
export var deltaTime = 0.0;
export var frame = -1;

export var mousePos = new THREE.Vector2();
export var mouseDelta = new THREE.Vector2();


export function SetUniforms(uniforms)
{
    if (uniforms.hasOwnProperty('resolution'))
        uniforms.resolution.value = resolution;

    if (uniforms.hasOwnProperty('time'))
        uniforms.time.value = time;

    if (uniforms.hasOwnProperty('frame'))
        uniforms.frame.value = frame;
    
    if (uniforms.hasOwnProperty('deltaTime'))
        uniforms.deltaTime.value = deltaTime;

    if (uniforms.hasOwnProperty('mousePos'))
        uniforms.mousePos.value = mousePos;

    if (uniforms.hasOwnProperty('mouseDelta'))
        uniforms.mouseDelta.value = mouseDelta;
}


export function UpdateDefaultUniforms(timestamp)
{
    timestamp /= 1000;

    lastTime = time;
    time = timestamp;
    deltaTime = time - lastTime;
    frame += 1;
}


function OnDocumentMouseMove(event)
{   
    mouseDelta = mousePos.clone();
  
    mousePos.x = (event.offsetX / window.innerWidth);
    mousePos.y = 1 - (event.offsetY / window.innerHeight);
}


function OnResize()
{
    resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);
}


window.addEventListener('mousemove', OnDocumentMouseMove, true);
window.addEventListener('resize', OnResize, true);