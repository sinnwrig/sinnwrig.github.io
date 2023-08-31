// Fetch fragment shader
const response = fetch('https://sinnwrig.github.io/Shaders/Fragment.hlsl');

response.text().then(function(shader) {
    const segments = new URL(response.url).pathname.split('/');
    const last = segments.pop() || segments.pop();
    console.log('Loaded shader ' + last);
    AddFullscreenPlane(shader);
});