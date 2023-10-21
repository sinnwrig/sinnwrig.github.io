// Original shader by davidar at https://www.shadertoy.com/view/4sKBz3

// Modified to use a single buffer and simplex noise.
// Shadertoy version at https://www.shadertoy.com/view/DstBWX

uniform sampler2D sourceTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform int frame;


uniform float distribution;
uniform float density;
uniform float fadeSpeed;
uniform float noiseScale;
uniform float particleSize;
uniform float particleSpeed;

#define MAX_ITERATIONS 10

#include "Shaders/Include/Hash.hlsl"
#include "Shaders/Include/Noise.hlsl"


#define UNROLLABLE_LOOP(minR, maxR, iter, val) for (int iter = 0; iter < MAX_ITERATIONS; iter++) { if (iter > int(abs(float(minR - maxR))) + 1) break; val = (iter - int(abs(float(minR - maxR)))) + 1;
#define END_LOOP }


vec2 getFlow(vec2 position)
{
    // Vector texture
    //vec2 direction = 2.0 * texture(vectorTexture, position * NOISE_SCALE).xy - 1.0;

    // Height determines scale;
    position /= resolution.y;

    return normalNoise(position, noiseScale, 354.459).xy * 0.3;
}

float rand(vec2 p)
{
    // After around ten million frames hash starts to break down, so mod it back.
    float frameMod = mod(float(frame), 1000000.0);

    return hash13(vec3(p, frameMod));
}

// Returns the position of a particle in the pixel, and 0 if there are none
vec2 sampleParticle(vec2 fragCoord) 
{
    // Kill random pixels to lower global density
    if (rand(fragCoord) < density) 
        return vec2(0);
        
    // Kernel needs to be big enough to handle particles that shift more than one unit
    int kernSize = int(ceil(particleSpeed));

    vec2 fragUV = fragCoord / resolution.xy;
    vec2 sizeScl = vec2(particleSize) / resolution.xy;

    int i, x;
    UNROLLABLE_LOOP(-kernSize, kernSize, i, x)
        int j, y;
        UNROLLABLE_LOOP(-kernSize, kernSize, j, y)

            // Get UV coordinates with offset
            vec2 offsetCoords = fragCoord + vec2(x, y);
            vec2 uv = offsetCoords / resolution.xy;

            // Sample particle buffer
            vec2 fragment = texture2D(sourceTexture, uv).xy;

            // Is the particle uninitialized?
            if (fragment == vec2(0))
            {
                // Probability of initializing
                if (rand(uv) > distribution) continue; // Don't initialize particle- skip iteration
                fragment = uv; // Initialize particle at position 
            }

            // Move particle with flow
            fragment += (getFlow(offsetCoords) * particleSpeed) / resolution.xy;

            // If the particle is close enough to pixel, use it
            if (abs(fragment.x - fragUV.x) < sizeScl.x && abs(fragment.y - fragUV.y) < sizeScl.y) 
                return fragment;
        END_LOOP
    END_LOOP

    // No particle nearby
    return vec2(0);
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) 
{
    vec2 particle = sampleParticle(fragCoord);
    
    float fade = texture2D(sourceTexture, fragCoord / resolution.xy).z;
    fade -= fadeSpeed * deltaTime;

    fragColor.xyz = vec3(particle, fade);

    // If there is a particle, reset fade
    if (particle != vec2(0.0))
    {
        fragColor.z = 1.0;
    }

    if (frame < 1)
    {
        fragColor.z = 0.0;
    }
}