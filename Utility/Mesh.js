// Simple container for vertex and index buffers

export class Mesh
{
    constructor(vertices, indices)
    {
        this.vertices = new Float32Array(vertices);
        this.indices = new Uint16Array(indices);

        this.vertexBuffer = {}; 
        this.indexBuffer = {}; 
        this.isMesh = true;
        this.isInitialized = false;
    }


    UpdateData(gl)
    {
        // Bind vertex positions
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, this.vertices, WebGLRenderingContext.STATIC_DRAW);

        // Bind vertex indices
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indices, WebGLRenderingContext.STATIC_DRAW);

        this.isInitialized = true;
    }


    Draw(gl, shader)
    {  
        if (!this.isInitialized)
        {
            // Bind and upload buffer data
            this.UpdateData(gl);
        }
        else
        {
            // Bind buffers and draw
            gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
            gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        }

        shader.Use(gl);
        gl.drawElements(WebGLRenderingContext.TRIANGLES, this.indices.length, WebGLRenderingContext.UNSIGNED_SHORT, 0);
    }
}

export const fullscreenMesh = new Mesh([ -1, -1, 1, -1, 1, 1, -1, 1 ], [ 0, 1, 2, 0, 2, 3 ]);