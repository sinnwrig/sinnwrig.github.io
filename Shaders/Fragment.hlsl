precision highp float;

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform vec3 background;
uniform vec3 color;


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    float fade = texture2D(sourceTexture, fragCoord / resolution.xy).z;

    fragColor.w = 1.0;
    fragColor.xyz = mix(background, color, fade);
    
    /*
    bool cOK = true;
    bool dOK = true;
    compareCompressed(fade.xyz, cOK, dOK);


    // If neither is ok
    if (!cOK && !dOK)
        fragColor.xyz = vec3(1.0, 0.0, 0.0);
    else if (!cOK)
        fragColor.xyz = vec3(0.0, 1.0, 0.0);
    else if (!dOK)
        fragColor.xyz = vec3(0.0, 0.0, 1.0);
    */
}


void main() 
{
    mainImage(gl_FragColor, gl_FragCoord.xy); 
}
