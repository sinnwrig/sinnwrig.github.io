import { Texture } from "../Utility/Texture.js";
import * as BLIT from "../Utility/Blit.js";


export class RenderBuffer
{
    constructor (width, height, options)
    {
        options.isRenderTexture = true;

        this.bufferA = new Texture(width, height, options);
        this.bufferB = new Texture(width, height, options);

        this.source = this.bufferA;
        this.destination = this.bufferB;
    }


    SetSize(gl, width, height)
    {
        this.bufferA.SetSize(gl, width, height);
        this.bufferB.SetSize(gl, width, height);
    }


    Render(gl, shader)
    {
        let temp = this.destination;
        this.destination = this.source;
        this.source = temp;

        BLIT.Blit(gl, this.source, this.destination, shader);
    }


    Clear(color)
    {
        gl.clearColor(color.x, color.y, color.z, color.w);
        this.bufferA.BindToFramebuffer(gl, WebGLRenderingContext.COLOR_ATTACHMENT0);
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        this.bufferB.BindToFramebuffer(gl, WebGLRenderingContext.COLOR_ATTACHMENT0);
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
    }

    
    RenderTexture()
    {
        return this.destination;
    }
}