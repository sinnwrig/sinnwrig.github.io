// Fetch fragment shader
fetch('https://sinnwrig.github.io/Shaders/Fragment.hlsl').then(response => response.text()).then(function(shader) 
{
    const segments = new URL(response.url).pathname.split('/');
    const last = segments.pop() || segments.pop();
    console.log('Loaded shader ' + last);
    AddFullscreenPlane(shader);
});