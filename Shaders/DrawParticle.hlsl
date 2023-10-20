uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform float frame;


uniform float distribution;
uniform float density;
uniform float fadeSpeed;
uniform float noiseScale;
uniform float particleSize;
uniform float particleSpeed;

// Use a square distance check for particles. Gives a rounder look at larger particle sizes
//#define SQR_DIST

#include "Shaders/Include/Hash.hlsl"
#include "Shaders/Include/Noise.hlsl"


vec2 getFlow(vec2 position)
{
    //vec2 direction = 2.0 * texture(vectorTexture, position * NOISE_SCALE).xy - 1.0;
    // Height determines scale;
    position /= resolution.y;

    return normalNoise(position, noiseScale, 354.459).xy * 0.3;
}

float rand(vec2 p)
{
    return hash13(vec3(p, frame));
}

// Returns the position of a particle in the pixel, and 0 if there are none
vec2 sampleParticle(vec2 fragCoord) 
{
    // Kill random pixels to lower global density
    if (rand(fragCoord) < density) 
        return vec2(0);
        
    // Kernel needs to be big enough to handle particles that shift more than one unit
    int kernSize = int(ceil(particleSpeed));

    // Sample neighboring pixels to check if this pixel will have a particle in it
    for (int x = -kernSize; x <= kernSize; x++) 
    {
        for (int y = -kernSize; y <= kernSize; y++) 
        {
            // Get UV coordinates with offset
            vec2 coords = (fragCoord + vec2(x, y)) / resolution.xy;

            // Sample particle buffer
            vec2 fragment = texture(sourceTexture, coords).xy;

            // Is the particle uninitialized?
            if (fragment == vec2(0))
            {
                // Probability of initializing
                if (rand(coords) < distribution) 
                {
                    fragment = fragCoord + vec2(x, y); // Initialize particle at position 
                }
                else 
                {
                    continue; // Don't initialize particle- skip iteration
                }
            }

            // Move particle with flow
            fragment += getFlow(fragCoord + vec2(x, y)) * particleSpeed;

        #ifdef SQR_DIST
            // Square distance check gives rounder particles at larger sizes
            vec2 vec = fragment.xy - fragCoord.xy;
            float distSqr = dot(vec, vec);
                
            // If the particle is close enough to pixel, use it
            if (distSqr < particleSize * particleSize)
            {
                return fragment;
            }
        #else
            // Original rectangle distance check
            // If the particle is close enough to pixel, use it
            if (abs(fragment.x - fragCoord.x) < particleSize && abs(fragment.y - fragCoord.y) < particleSize) 
            {
                return fragment;
            }
        #endif
        }
    }

    // No particle nearby
    return vec2(0);
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec2 particle = sampleParticle(fragCoord);
    
    float fade = texture(sourceTexture, fragCoord / resolution.xy).z;
    fade -= fadeSpeed * deltaTime;

    fragColor.xyz = vec3(particle, fade);

    // If there is a particle, reset fade
    if (particle != vec2(0.0))
    {
        fragColor.z = 1.0;
    }

    if (frame < 1.0)
    {
        fragColor.z = 0.0;
    }
}