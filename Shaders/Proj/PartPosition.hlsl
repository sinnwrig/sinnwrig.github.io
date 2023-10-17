// Takes particle sample kernel and vector texture as input
// iChannel0 is sample kernel
// iChannel3 is vectors texture

// Particle position buffer
void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec2 uv = fragCoord / iResolution.xy;
    
    // Get particle position
    vec2 p = texture(iChannel0, uv).xy;
    
    // Not sure how this works
    if(p == vec2(0.0)) 
    {
        // Reset position based on random hash
        if (hash13(vec3(fragCoord, iFrame)) < DISPERSION) 
        {
            return;
        }
            
        // Reset particle to fragment position offset by hash
        p = fragCoord + hash21(float(iFrame)) - 0.5;
    }
       
    // Get particle velocity
    vec2 v = 2.0 * texture(iChannel3, 0.03 * uv).xy - 1.;
    
    // Store particle position shifted by velocity
    fragColor.xy = p + v;
}