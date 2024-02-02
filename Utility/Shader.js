import { Vector3 } from "./Vectors.js";

// Container for a compiled shader program
// Handles getting and setting shader uniforms and attributes


// The basic hello world fullscreen UV square
const defaultVertex = "attribute vec2 inPos; void main() { gl_Position = vec4(inPos, 0.0, 1.0); }";
const defaultFragment = "precision mediump float; uniform vec3 resolution; void main(void) { gl_FragColor = vec4(gl_FragCoord.xy / resolution.xy, 0.0, 1.0); }"


const defaultUniforms = { resolution: { value: new Vector3(0, 0, 0) } };
const defaultAttributes = { inPos: { isPointer: true, size: 2, type: WebGLRenderingContext.FLOAT } };


// Shader is sort of a mixture between material/shader
export class Shader 
{
    constructor(gl, vertexSrc, fragmentSrc, uniforms, attributes) 
    {
        if (!vertexSrc)
            vertexSrc = defaultVertex;

        if (!fragmentSrc)
            fragmentSrc = defaultFragment;

        if (!uniforms)
            uniforms = defaultUniforms;

        if (!attributes)
            attributes = defaultAttributes; 

        this.program = CompileShader(gl, vertexSrc, fragmentSrc);

        this.uniforms = uniforms;
        this.attributes = attributes;

        // GUID is used so multiple shaders don't access the same uniform/attribute locations if they share uniform or attribute objects
        this.guid = UniqueNum();


        // Get locations and bind them to custom shader guid
        for (let uniform in uniforms)
        {
            // Uniform 'location' is an object with locations indexed by the shader GUID.
            (uniforms[uniform].location ??= {})[this.guid] ??= gl.getUniformLocation(this.program, uniform);
        }

        for (let attrib in attributes)
            (attributes[attrib].location ??= {})[this.guid] ??= gl.getAttribLocation(this.program, attrib);

        this.vertexSource = vertexSrc;
        this.fragmentSource = fragmentSrc;
        this.isShader = true;
    }


    static async LoadFromFile(gl, vertexURL, fragmentURL, uniforms, attributes)
    {
        let vertexSrc = defaultVertex;
        let fragmentSrc = defaultFragment;

        if (vertexURL)
            vertexSrc = await GetText(vertexURL);

        if (fragmentURL)
            fragmentSrc = await GetText(fragmentURL);

        vertexSrc = await Preprocess(vertexSrc, vertexURL);
        fragmentSrc = await Preprocess(fragmentSrc, fragmentURL);

        return new Shader(gl, vertexSrc, fragmentSrc, uniforms, attributes);
    }


    Use(gl) 
    {
        gl.useProgram(this.program);

        this.UpdateUniforms(gl);
        this.UpdateAttributes(gl);
    }


    UpdateUniforms(gl)
    {
        // Reset texture binding location
        textureLoc = 0;

        for (let uniform in this.uniforms)
        {
            let uniformObj = this.uniforms[uniform];
            UpdateUniform(gl, uniformObj, uniformObj.location[this.guid]);
        }
    }


    UpdateAttributes(gl)
    {
        for (let attrib in this.attributes)
        {
            let attribObj = this.attributes[attrib];
            UpdateAttribute(gl, attribObj, attribObj.location[this.guid]);
        }
    }
}


function UpdateUniform(gl, uniform, location)
{
    let value = uniform.value;

    if (!isNaN(value)) {
        gl.uniform1f(location, value);
    } else if (value.isVector2) {
        gl.uniform2f(location, value.x, value.y);
    } else if (value.isVector3) {
        gl.uniform3f(location, value.x, value.y, value.z);
    } else if (value.isVector4) {
        gl.uniform4f(location, value.x, value.y, value.z, value.w);
    } else if (value.isTexture)
        BindTexture(gl, value, location);
}


var textureLoc = 0;

function BindTexture(gl, texture, location)
{
    if (!texture.isCreated)
        throw new Error("Attempting to bind nonexistent texture!");

    if (textureLoc > 7)
        throw new Error("Cannot bind more than 8 texture uniforms to shader program!");

    let active = WebGLRenderingContext.TEXTURE0 + textureLoc;

    gl.activeTexture(active);
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.glTexture);

    // Tell the shader we bound the texture to texture unit
    gl.uniform1i(location, textureLoc);

    // Move to next texture position
    textureLoc++;
}


function UpdateAttribute(gl, attribute, location)
{
    let pos = location;

    if (attribute.isPointer)
    {        
        gl.enableVertexAttribArray(pos);

        let size = attribute.size || 1;
        let type = attribute.type || WebGLRenderingContext.BYTE;
        let normalized = attribute.normalized || false;
        let stride = attribute.stride || 0;
        let offset = attribute.offset || 0;

        gl.vertexAttribPointer(pos, size, type, normalized, stride, offset);
        return; 
    }

    let value = attribute.value;

    if (!isNaN(value)) 
        gl.vertexAttrib1f(pos, value);
    else if (value.isVector2) 
        gl.vertexAttrib2f(pos, value.x, value.y);
    else if (value.isVector3) 
        gl.vertexAttrib3f(pos, value.x, value.y, value.z);
    else if (value.isVector4)
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
        throw new Error(`Vertex shader failed to compile \n\n${log}\n\n${vert}`);
    }

    var fs = gl.createShader(WebGLRenderingContext.FRAGMENT_SHADER);

    gl.shaderSource(fs, frag);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, WebGLRenderingContext.COMPILE_STATUS))
    {
        const log = gl.getShaderInfoLog(fs);
        throw new Error(`Fragment shader failed to compile \n\n${log}\n\n${frag}`);
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


async function GetText(url)
{
    const request = new Request(url);
    const response = await fetch(request);
    
    if (!response.ok)
    {
        throw new Error("Could not fetch source file: " + url);
    }

    const text = await response.text();

    return text;
}


function GetParentFolder(url, levels)
{
    for (let i = 0; i < levels; i++)
    {
        url = url.substring(0, url.lastIndexOf( "/" ) + 1);
    }

    return url;
}


const maxIncludeDepth = 8;


async function GetIncludeText(includeLine, sourceURL, depth)
{
    if (depth > maxIncludeDepth)
        throw new Error("Maximum include depth reached in source file: " + sourceURL);

    if (!includeLine.includes('#include'))
        return includeLine + '\n';

    let includePath = includeLine.substring(includeLine.indexOf("\"") + 1, includeLine.lastIndexOf("\""));

    if (!includePath)
        return includeLine + '\n';

    let count = (includePath.match(/\.\.\//g) || []).length;
    let parentURL = GetParentFolder(sourceURL, count);

    let cleanPath = includePath.replace(/\.\.\//g,'');

    let newPath = count == 0 ? includePath : parentURL + cleanPath;

    console.log("Including " + includePath);

    let includeFile = await GetText(newPath);

    let result = await Preprocess(includeFile, newPath, depth + 1);

    return '// INCLUDE ' + newPath + '\n' + result + '\n// END INCLUDE\n';
}


// Handle all shader file includes
async function Preprocess(shader, shaderURL, depth)
{
    if (depth === undefined)
        depth = 0;

    let result = "";

    let linesSplit = shader.split(/\r?\n/);
    
    for (let i = 0; i < linesSplit.length; i++)
    {
        let line = await GetIncludeText(linesSplit[i], shaderURL, depth);
        result += line;
    }

    return result;
}


function UniqueNum() 
{
    return Date.now() & Math.random() << Math.random();
}