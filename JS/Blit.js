// Utility functions for blitting from one texture to another with a fullscreen mesh

import * as THREE from './Three.js';
import * as UNIFORMS from './Uniforms.js';


const blitScene = new THREE.Scene();
const planeGeometry = new THREE.PlaneGeometry();
const camera = new THREE.PerspectiveCamera(1, 1, 0.001, 1);


var blitMaterial = new THREE.ShaderMaterial( {
    uniforms: {
        sourceTexture: { value: null },
        resolution: { value: null }
    },
    fragmentShader: "uniform sampler2D sourceTexture; uniform vec2 resolution; void main(void) { gl_FragColor = texture(sourceTexture, gl_FragCoord.xy / resolution.xy); }"
} );


var planeMesh = new THREE.Mesh(planeGeometry, blitMaterial);

camera.position.set(0, 0, 1);
blitScene.add(planeMesh);


export function Blit(source, target, renderer, material)
{
    let resolution = null;
    
    // Use screen resolution if target is null
    if (target)
        resolution = new THREE.Vector3(target.width, target.height, target.width / target.height);
    else
        resolution = UNIFORMS.resolution;

    // Use default blit material if none is provided
    if (!material)   
        material = blitMaterial;

    // Set source texture if it exists and the property is available
    if (source && material.uniforms.hasOwnProperty('sourceTexture'))
        material.uniforms.sourceTexture.value = source.texture;

    // Set resolution property if it exists
    if (material.uniforms.hasOwnProperty('resolution'))
        material.uniforms.resolution.value = resolution;

    planeMesh.scale.set(resolution.z, 1, 1);
    planeMesh.material = material;

    camera.aspect = resolution.z;
    camera.updateProjectionMatrix();

    renderer.setRenderTarget(target);
    renderer.render(blitScene, camera);
}