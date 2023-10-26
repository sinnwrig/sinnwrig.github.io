import { Shader } from "./Shader.js";
import { fullscreenMesh } from "./Mesh.js";
import { Vector3 } from "./Vectors.js";
import { Texture } from "./Texture.js";

// Utility functions for blitting from one texture to another with a fullscreen mesh

var blitShader = undefined;

var uniforms = { resolution: { value: new Vector3(0, 0, 0) }, sourceTexture: { value: null } };
const blitFrag = "precision mediump float; uniform sampler2D sourceTexture; uniform vec3 resolution; void main(void) { gl_FragColor = texture2D(sourceTexture, gl_FragCoord.xy / resolution.xy); }"


export function Blit(gl, source, target, shader, clearTarget)
{
    if (!blitShader)
        blitShader = new Shader(gl, null, blitFrag, uniforms);

    if (!target)
        throw new Error("Blit target is not set!");

    let resolution  = new Vector3(target.width, target.height, target.width / target.height);

    // Use default blit shader if none is provided
    if (!shader)  
        shader = blitShader;

    // Set source texture if it exists and the property is available
    if (source && source.isTexture && shader.uniforms.sourceTexture)
        shader.uniforms.sourceTexture.value = source;

    // Set resolution property if it exists
    if (shader.uniforms.resolution)
        shader.uniforms.resolution.value = resolution;


    // Bind or reset target depending on if it is canvas or texture
    if (target.isTexture)
        target.BindToFramebuffer(gl, WebGLRenderingContext.COLOR_ATTACHMENT0);
    else
        Texture.ResetFramebuffer(gl, target);

    if (clearTarget)
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);

    fullscreenMesh.Draw(gl, shader);
}