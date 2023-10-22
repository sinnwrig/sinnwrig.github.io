import { DefaultFileLoader } from "../ThreeScripts/FileLoader.js";


const defaultVertex = "attribute vec2 inPos; void main() { gl_Position = vec4(inPos, 0.0, 1.0); }";
const defaultFragment = "precision mediump float; uniform vec2 resolution; void main(void) { gl_FragColor = vec4(gl_FragCoord.xy / resolution.xy, 0.0, 1.0); }"


export class Shader 
{
    constructor(gl, vertexSrc, fragmentSrc, uniforms, attributes) 
    {
        if (vertexSrc === undefined)
            vertexSrc = defaultVertex;

        if (fragmentSrc === undefined)
            fragmentSrc = defaultFragment;

        this.program = CompileShader(gl, vertexSrc, fragmentSrc);

        this.uniforms = uniforms;
        this.attributes = attributes;

        // GUID is used so multiple shaders don't access the same uniform/attribute locations if they share uniform or attribute objects
        this.guid = UniqueNum();


        // Get locations and bind them to custom shader guid
        for (let uniform in uniforms)
            (uniforms[uniform].location ??= {})[this.guid] ??= gl.getUniformLocation(this.program, uniform);

        for (let attrib in attributes)
            (attributes[attrib].location ??= {})[this.guid] = gl.getAttribLocation(this.program, attrib);

        this.vertexSource = vertexSrc;
        this.fragmentSource = fragmentSrc;
    }


    static async LoadFromFile(gl, vertexURL, fragmentURL, uniforms, attributes)
    {
        let vertexSrc = defaultVertex;
        let fragmentSrc = defaultFragment;

        if (vertexURL)
            vertexSrc = await DefaultFileLoader.LoadAsync(vertexURL);

        if (fragmentURL)
            fragmentSrc = await DefaultFileLoader.LoadAsync(fragmentURL);

        vertexSrc = await Preprocess(vertexSrc);
        fragmentSrc = await Preprocess(fragmentSrc);

        return new Shader(gl, vertexSrc, fragmentSrc, uniforms, attributes);
    }


    Use(gl) 
    {
        gl.useProgram(this.program);
    }


    UpdateUniforms(gl)
    {
        gl.useProgram(this.program);

        for (let uniform in this.uniforms)
        {
            let uniformObj = this.uniforms[uniform];
            UpdateUniform(gl, uniformObj, uniformObj.location[this.guid]);
        }
    }


    UpdateAttributes(gl)
    {
        gl.useProgram(this.program);

        for (let attrib in this.attributes)
        {
            let attribObj = this.attributes[attrib];
            UpdateAttribute(gl, attribObj, attribObj.location[this.guid]);
        }
    }
}


function UpdateUniform(gl, uniform, location)
{
    let pos = location;
    let value = uniform.value;

    if (!isNaN(value)) 
        gl.uniform1f(pos, value);
    else if (uniform.value.isVector2) 
        gl.uniform2f(pos, value.x, value.y);
    else if (uniform.value.isVector3) 
        gl.uniform3f(pos, value.x, value.y, value.z);
    else if (uniform.value.isVector4)
        gl.uniform4f(pos, value.x, value.y, value.z, value.w);
}


function UpdateAttribute(gl, attribute, location)
{
    let pos = location;

    if (attribute.isPointer)
    {        
        gl.enableVertexAttribArray(pos);

        let size = attribute.size ? attribute.size : 1;
        let type = attribute.type ? attribute.type : WebGLRenderingContext.BYTE;
        let normalized = attribute.normalized ? attribute.normalized : false;
        let stride = attribute.stride ? attribute.stride : 0;
        let offset = attribute.offset ? attribute.offset : 0;

        gl.vertexAttribPointer(pos, size, type, normalized, stride, offset);
        return; 
    }

    let value = uniform.value;

    if (value instanceof Number) 
        gl.vertexAttrib1f(pos, value);
    else if (uniform.value.isVector2) 
        gl.vertexAttrib2f(pos, value.x, value.y);
    else if (uniform.value.isVector3) 
        gl.vertexAttrib3f(pos, value.x, value.y, value.z);
    else if (uniform.value.isVector4)
        gl.vertexAttrib4f(pos, value.x, value.y, value.z, value.w);
}


// Compile and link the shaders vert and frag
function CompileShader(gl, vert, frag)
{
    let vs = gl.createShader(WebGLRenderingContext.VERTEX_SHADER);

    gl.shaderSource(vs, vert);
    gl.compileShader(vs);

    if (!gl.getShaderParameter(vs, WebGLRenderingContext.COMPILE_STATUS))
    {
        const log = gl.getShaderInfoLog(vs);
        throw new Error(`Vertex shader failed to compile \n\n${log}`);
    }

    var fs = gl.createShader(WebGLRenderingContext.FRAGMENT_SHADER);

    gl.shaderSource(fs, frag);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, WebGLRenderingContext.COMPILE_STATUS))
    {
        const log = gl.getShaderInfoLog(fs);
        throw new Error(`Fragment shader failed to compile \n\n${log}`);
    }

    var program = gl.createProgram();

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);

    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS))
    {
        const log = gl.getProgramInfoLog(program);
        throw new Error(`Shader failed to link \n\n${log}`);
    }

    return program;
}


async function Preprocess(shader, onProgress)
{
    let result = "";

    let linesSplit = shader.split(/\r?\n/);

    for (let i = 0; i < linesSplit.length; i++)
    {
        let line = linesSplit[i];

        if (line.includes('#include'))
        {
            let includePath = line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\""));

            if (includePath && includePath != "")
            {
                console.log("Including " + includePath);

                let includeFile = await DefaultFileLoader.LoadAsync(includePath, onProgress);

                line = "// BEGIN PREPROCESSOR INCLUDE\n" + includeFile + "\n// END PREPROCESSOR INCLUDE";  
            } 
        }

        result += line + "\n";
    }

    return result;
}


function UniqueNum() 
{
    return Date.now() + Math.random();
}