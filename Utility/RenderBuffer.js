import { Texture } from "../Utility/Texture.js";
import * as BLIT from "../Utility/Blit.js";

// A two-testure buffer for blitting back and forth between targets

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


    SetSize(gl, width, height, clearColor)
    {
        this.bufferA.SetSize(gl, width, height);
        this.bufferB.SetSize(gl, width, height);

        if (clearColor.isVector4)
            this.Clear(gl, clearColor);
    }


    Render(gl, shader)
    {
        let temp = this.destination;
        this.destination = this.source;
        this.source = temp;

        BLIT.Blit(gl, this.source, this.destination, shader);
    }


    Clear(gl, color)
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