// Utilities for setting commonly used uniform values.

import * as THREE from './Three.js';


export const defaultUniforms =
{
    resolution: { value: null},
    time: { value: null},
    deltaTime: { value: null},
    mousePosition: { value: null },
    mouseDelta: { value: null }
};


export var resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);
export const start = Date.now() / 1000;
export var mousePos = new THREE.Vector2();
export var mouseDelta = new THREE.Vector2();


var time = start;
var deltaTime = start;

export function SceneTime()
{
    return (Date.now() / 1000) - start;
}


export function SetUniforms(uniforms)
{
    Object.assign(uniforms, defaultUniforms);
}


function UpdateDefaultUniforms()
{
    requestAnimationFrame(UpdateDefaultUniforms);

    deltaTime = time;
    time = SceneTime();

    defaultUniforms.time.value = time;
    defaultUniforms.deltaTime.value = time - deltaTime;
}


function OnDocumentMouseMove(event)
{   
    mouseDelta = mousePos.clone();
  
    mousePos.x = (event.offsetX / window.innerWidth);
    mousePos.y = 1 - (event.offsetY / window.innerHeight);

    defaultUniforms.mousePosition.value = mousePos;
    defaultUniforms.mouseDelta.value = mouseDelta;
}


function OnResize()
{
    resolution = new THREE.Vector3(window.innerWidth, window.innerHeight, window.innerWidth / window.innerHeight);
    defaultUniforms.resolution.value = resolution;
    console.log("Resize");
}


window.addEventListener('mousemove', OnDocumentMouseMove, true);
window.addEventListener('resize', OnResize, true);

UpdateDefaultUniforms();