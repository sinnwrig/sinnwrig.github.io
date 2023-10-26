
// Get highest level WebGL context
export function AutoGetContext(canvas, forceGL2)
{
    let gl = canvas.getContext('webgl2');

    if (gl)
        return gl;

    if (typeof WebGL2RenderingContext !== 'undefined') 
        console.warn('WebGL2 support found but not enabled. Try updating your OS and/or video card drivers.');
    else 
        console.warn('WebGL2 is not supported on this browser.');  
    
    if (forceGL2)
        throw new Error('No suitable WebGL2 context provided');

    console.log('Falling back on WebGL1');
    gl = canvas.getContext('webgl');

    if (gl)
        return gl;

    if (typeof WebGLRenderingContext !== 'undefined') 
        console.log('WebGL support found but not enabled. Try updating your OS and/or video card drivers.');
    else
        console.warn('WebGL is not supported on this browser.');

    throw new Error('No suitable WebGL context provided');  
}