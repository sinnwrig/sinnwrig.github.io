function LoadFullscreenShader(url)
{
    fetch(url)
    .then(response => response.text())
    .then((shader) => 
    {
        const segments = new URL(url).pathname.split('/');
        const last = segments.pop() || segments.pop();
        console.log('Loaded shader ' + last);
        AddFullscreenPlane(shader);
    });
}

// Fetch fragment shader
LoadFullscreenShader('https://sinnwrig.github.io/Shaders/Fragment.hlsl');