import { Shader } from "./Shader.js";
import { Vector2 } from "./Vectors.js";
import { Mesh, fullscreenMesh } from "./Mesh.js";


var canvas = document.getElementById("ogl-canvas");
var gl = canvas.getContext("webgl");
var shader;


var uniforms = {
    iResolution: 
    { 
        value: new Vector2(0.0, 0.0) 
    },
    iTime:
    {
        value: 0.0
    }
};

var attributes = {
    inPos: 
    { 
        isPointer: true,
        size: 2,
        type: WebGLRenderingContext.FLOAT,
        normalized: false,
        stride: 0,
        offset: 0
    }
};
  

function Init() 
{
    OnResize();

    if (!gl) 
    {
        return;
    }

    // Bind mesh before updating attributes
    fullscreenMesh.Bind(gl);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    requestAnimationFrame(Render);
}


function Render(deltaTime) 
{
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);

    uniforms.iResolution.value.x = canvas.width;
    uniforms.iResolution.value.y = canvas.height;

    uniforms.iTime.value = deltaTime / 1000;

    shader.UpdateUniforms(gl);
    shader.UpdateAttributes(gl);
    fullscreenMesh.Draw(gl);
    
    requestAnimationFrame(Render);
}  
  

function OnResize() 
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

window.addEventListener('resize', OnResize, true);


Shader.LoadFromFile(gl, "/test/Shader/vertex.hlsl", "/test/Shader/fragment.hlsl", uniforms, attributes).then((sh) => {
    shader = sh;
    Init();
}).catch((err) => console.log(err));