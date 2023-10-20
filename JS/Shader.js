// Shader loading and preprocessing utilities.

import * as THREE from './Three.js';

// Asynchronously load file with a Promise
export function LoadFile(filePath, onProgress, onError) 
{
    return new Promise((resolve) => {
        const loader = new THREE.FileLoader();
        loader.setResponseType('text');
        loader.load(filePath, (data) => resolve(data), onProgress, onError);
    });
}

// Load and preprocess shader
export function LoadProcessed(shaderURL, onLoad, onProgress, onError)
{
    LoadFile(shaderURL, onProgress, onError).then((shader) => Preprocess(shader, onProgress, onError)).then((x) => onLoad(x));
}

// Create a material from provided URL and uniforms
export function CreateMaterial(shaderURL, materialUniforms, onCreate, onProgress, onError)
{
    LoadProcessed(shaderURL, (shader) => onCreate(new THREE.ShaderMaterial( { uniforms: materialUniforms, fragmentShader : shader } )), onProgress, onError);
}


// Preprocess the provided shader
// Replaces all occurences of #include "{file path}" with the provided contents of the file at that path. 
// Does not replace #include <threejs_shader_chunk> occurences.
// Adds a function at the end that calls mainImage() to make shader syntax like ShaderToy, since I prefer knowing what variables I'm working with.
export async function Preprocess(shader, onProgress, onError)
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

                let includeFile = await LoadFile(includePath, onProgress, onError);

                line = "// BEGIN PREPROCESSOR INCLUDE\n" + includeFile + "\n// END PREPROCESSOR INCLUDE";  
            } 
        }

        result += line + "\n";
    }

    result += "void main(void) { mainImage(gl_FragColor, gl_FragCoord.xy); }";

    return result;
}