// Takes particle sample kernel and vector texture as input
// iChannel0 is sample kernel
// iChannel1 is self
// iChannel3 is vectors texture


// Fade/Trail buffer
void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec2 uv = fragCoord / iResolution.xy;
    
    // Noise texture sample in -1 to 1 range
    vec2 v = 2.0 * texture(iChannel3, 0.03 * uv).xy - 1.0;
    
    // Sample self buffer and fade it
    float r = FADE * texture(iChannel1, uv).x;
    
    // Is there a particle at fragment position?
    if (texture(iChannel0, uv).x > 0.0) 
    {
        r = 1.0;
    }
    
    fragColor.x = r;
}