uniform sampler2D sourceTexture;
uniform sampler2D noiseTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform float frame;

// Original shader by davidar at https://www.shadertoy.com/view/4sKBz3
// Modified to use a single buffer

#define DISTRIBUTION 0.0002
#define DENSITY 0.03

#define FADE_POW 0.96
#define NOISE_SCALE 0.03

// Particle size - Larger size will make particles coagulate, smaller size can cause particles to dissapear.
#define KERN 1
#define PART_SIZE 0.5

#include "Shaders/Include/Hash.hlsl"

vec2 getFlow(vec2 position)
{
    vec2 direction = 2.0 * texture2D(noiseTexture, position * NOISE_SCALE).xy - 1.0;

    // Normalizing direction does not seem to be needed with the noise texture since it comes normalized.
    //direction = normalize(direction) * 0.5;

    return direction;
}

float rand(vec2 p)
{
    return hash13(vec3(p, float(frame)));
}


// Returns the position of a particle in the pixel, and 0 if there are none
vec2 getParticle(vec2 fragCoord) 
{
    // Kill random pixels to lower global density
    if (rand(fragCoord) < DENSITY) 
        return vec2(0);

    // Sample neighboring pixels to check if this pixel will have a particle in it
    for (int x = -KERN; x <= KERN; x++) 
    {
        for (int y = -KERN; y <= KERN; y++) 
        {
            // Get UV coordinates with offset
            vec2 coords = (fragCoord + vec2(x, y)) / resolution.xy;

            // Sample particle buffer
            vec2 fragment = texture2D(sourceTexture, coords).xy;

            // Is the particle uninitialized?
            if (fragment == vec2(0))
            {
                // Probability of initializing
                if (rand(coords) < DISTRIBUTION) // Initialize particle at position
                    fragment = fragCoord + vec2(x, y);
                else // Don't initialize particle- skip iteration
                    continue;
            }

            // Move particle with flow
            fragment += getFlow(coords);

            // Square distance check gives rounder particles at larger sizes
            vec2 vec = fragment.xy - fragCoord.xy;
            float distSqr = dot(vec, vec);
                
            // If the particle is close enough to pixel, use it
            if (distSqr < PART_SIZE * PART_SIZE)
            {
                return fragment;
            }
            
            // Original rectangle distance check
            /*
            if (abs(fragment.x - fragCoord.x) < PART_SIZE && abs(fragment.y - fragCoord.y) < PART_SIZE) 
            {
                return fragment;
            }
            */
        }
    }

    // No particle nearby
    return vec2(0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    fragColor.xy = getParticle(fragCoord);

    // Apply fading
    fragColor.z = texture2D(sourceTexture, fragCoord / resolution.xy).z - (FADE_POW * deltaTime);

    // If there is a particle, reset fade
    if (fragColor.x > 0.0)
    {
        fragColor.z = 1.0;
    }
}