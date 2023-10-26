// Container for a WebGL texture

export class Texture
{
    constructor(width, height, settings = {})
    {
        let options = Object.assign( {
            minFilter: WebGLRenderingContext.NEAREST,
            magFilter: WebGLRenderingContext.NEAREST,
            wrapS: WebGLRenderingContext.CLAMP_TO_EDGE,
            wrapT: WebGLRenderingContext.CLAMP_TO_EDGE,
            format: WebGLRenderingContext.RGBA,
            type: WebGLRenderingContext.UNSIGNED_BYTE,
            isRenderTexture: false
        }, settings);

        this.minFilter = options.minFilter;
        this.magFilter = options.magFilter;
        this.wrapS = options.wrapS;
        this.wrapT = options.wrapT;
        this.format = options.format;
        this.internalFormat = undefined;
        this.type = options.type;

        this.image = undefined;
        this.isTexture = true;
        this.isCreated = false;
        this.isRenderTexture = options.isRenderTexture;
        this.frameBuffer = undefined;
        this.glTexture = undefined;
        this.width = width;
        this.height = height;
    }


    Create(gl, data)
    {
        if (data && this.isRenderTexture)
            throw new Error("RenderTextures cannot have associated image data!");

        if (!this.internalFormat)
            this.internalFormat = GetInternalFormat(gl, this.format, this.type);

        gl.deleteTexture(this.glTexture);
        this.glTexture = gl.createTexture();

        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTexture);
        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, data ? data : null);

        this.UpdateParameters(gl);

        if (this.isRenderTexture)
            this.frameBuffer = gl.createFramebuffer();

        this.isCreated = true;
    }


    UpdateParameters(gl)
    {
        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, this.minFilter);
        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, this.magFilter);
        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, this.wrapS);
        gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, this.wrapT);
    }


    async Load(gl, url)
    {
        if (this.isRenderTexture)
            throw new Error("RenderTextures cannot have associated image data!");
    
        if (!this.internalFormat)
            this.internalFormat = GetInternalFormat(gl, this.format, this.type, this.isRenderTexture);

        this.image = await LoadImage(url);

        gl.deleteTexture(this.glTexture);
        this.glTexture = gl.createTexture();

        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTexture);
        // Loaded images have to be flipped
        gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, true);

        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, this.format, this.format, this.type, this.image);

        this.width = this.image.width;
        this.height = this.image.height;

        this.UpdateParameters(gl);

        this.isCreated = true;

        return this;
    }


    SetSize(gl, width, height)
    {
        if (!this.isRenderTexture)
            throw new Error("Only RenderTextures can be resized!");

        this.width = width;
        this.height = height;

        this.Create(gl, null);
    }


    BindToFramebuffer(gl, attachmentPoint)
    {
        if (!this.isRenderTexture)
            throw new Error("Only RenderTextures can be bound as framebuffers!");

        if (!this.isCreated)
            throw new Error("Cannot bind non-created texture as framebuffer!");

        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, attachmentPoint, WebGLRenderingContext.TEXTURE_2D, this.glTexture, 0);

        gl.viewport(0, 0, this.width, this.height);
    }


    static ResetFramebuffer(gl, canvas)
    {
        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
}


async function LoadImage(src)
{
    return new Promise((resolve, reject) => 
    { 
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
}


function GetInternalFormat(gl, glFormat, glType, isRenderTexture) 
{
    let internalFormat = glFormat;

    if (glFormat === WebGL2RenderingContext.RED) 
    {
        if (glType === WebGL2RenderingContext.FLOAT) internalFormat = WebGL2RenderingContext.R32F;
        if (glType === WebGL2RenderingContext.HALF_FLOAT) internalFormat = WebGL2RenderingContext.R16F;
        if (glType === WebGL2RenderingContext.UNSIGNED_BYTE) internalFormat = WebGL2RenderingContext.R8;
    }

    if (glFormat === WebGL2RenderingContext.RED_INTEGER) 
    {
        if (glType === WebGL2RenderingContext.UNSIGNED_BYTE) internalFormat = WebGL2RenderingContext.R8UI;
        if (glType === WebGL2RenderingContext.UNSIGNED_SHORT) internalFormat = WebGL2RenderingContext.R16UI;
        if (glType === WebGL2RenderingContext.UNSIGNED_INT) internalFormat = WebGL2RenderingContext.R32UI;
        if (glType === WebGL2RenderingContext.BYTE) internalFormat = WebGL2RenderingContext.R8I;
        if (glType === WebGL2RenderingContext.SHORT) internalFormat = WebGL2RenderingContext.R16I;
        if (glType === WebGL2RenderingContext.INT) internalFormat = WebGL2RenderingContext.R32I;
    }

    if (glFormat === WebGL2RenderingContext.RG) 
    {
        if (glType === WebGL2RenderingContext.FLOAT) internalFormat = WebGL2RenderingContext.RG32F;
        if (glType === WebGL2RenderingContext.HALF_FLOAT) internalFormat = WebGL2RenderingContext.RG16F;
        if (glType === WebGL2RenderingContext.UNSIGNED_BYTE) internalFormat = WebGL2RenderingContext.RG8;
    }

    if (glFormat === WebGL2RenderingContext.RGBA) 
    {
        if (glType === WebGL2RenderingContext.FLOAT) internalFormat = WebGL2RenderingContext.RGBA32F;
        if (glType === WebGL2RenderingContext.HALF_FLOAT) internalFormat = WebGL2RenderingContext.RGBA16F;
        if (glType === WebGL2RenderingContext.UNSIGNED_BYTE) internalFormat = WebGL2RenderingContext.RGBA8;
        if (glType === WebGL2RenderingContext.UNSIGNED_SHORT_4_4_4_4) internalFormat = WebGL2RenderingContext.RGBA4;
        if (glType === WebGL2RenderingContext.UNSIGNED_SHORT_5_5_5_1) internalFormat = WebGL2RenderingContext.RGB5_A1;
    }  


    if (internalFormat === WebGL2RenderingContext.R16F || internalFormat === WebGL2RenderingContext.R32F ||
        internalFormat === WebGL2RenderingContext.RG16F || internalFormat === WebGL2RenderingContext.RG32F ||
        internalFormat === WebGL2RenderingContext.RGBA16F || internalFormat === WebGL2RenderingContext.RGBA32F) 
    {
        GetFloatExtensions(gl);

        if (!floatTexSupport)
            throw new Error("Floating point textures are not supported on this platform!");
        
        if (isRenderTexture && !renderTexSupport)
            throw new Error("Rendering to floating point textures is not supported on this platform!");

        // WebGL 1 handles internal formats itself, so reset the explicit internal format
        if (webGL1)
            internalFormat = glFormat;
    }

    return internalFormat;
}


var gotExtensions = false;
var webGL1 = false;
var floatTexSupport = undefined;
var renderTexSupport = true;


function GetFloatExtensions(gl)
{
    if (gotExtensions)
        return;

    gotExtensions = true;

    let OESFloat = gl.getExtension('OES_texture_float');
    let EXTFloat = gl.getExtension('EXT_color_buffer_float');

    floatTexSupport = (OESFloat || EXTFloat);

    if (!floatTexSupport)
        return;

    // WebGL 1
    if (OESFloat && !EXTFloat)
    {
        console.log('WebGl1 float texture');
        webGL1 = true;
        
        if (!gl.getExtension('WEBGL_color_buffer_float'))
            renderTexSupport = false;
    }
}