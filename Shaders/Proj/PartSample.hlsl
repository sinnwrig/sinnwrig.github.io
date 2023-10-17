// Takes position buffer as input
// iChannel0 is particle positions

// Particle sample kernel
void mainImage( out vec4 fragColor, in vec2 fragCoord ) 
{
    fragColor = vec4(0);

    for(int i = -1; i <= 1; i++) 
    {
        for(int j = -1; j <= 1; j++) 
        {
            vec4 c = texture(iChannel0, (fragCoord + vec2(i,j)) / iResolution.xy);

            if (abs(c.x - fragCoord.x) < 0.5 && abs(c.y - fragCoord.y) < 0.5) 
            {
                fragColor = c;
                return;
            }
        }
    }
}