// Original shader by davidar at https://www.shadertoy.com/view/4sKBz3

// Modified to use a single buffer and simplex noise.
// Shadertoy version at https://www.shadertoy.com/view/DstBWX
precision mediump float;

uniform sampler2D sourceTexture;
uniform sampler2D vectorTexture;
uniform vec3 resolution;
uniform float deltaTime;
uniform float frame;


uniform float distribution;
uniform float density;
uniform float fadeSpeed;
uniform float noiseScale;
uniform float particleSize;
uniform float particleSpeed;

#define MAX_ITERATIONS 10

#include "/Shaders/Include/Hash.hlsl"
#include "/Shaders/Include/Noise.hlsl"

#define NORMALIZE_VALUE


#define UNROLLABLE_LOOP(minR, maxR, iter, val) for (int iter = 0; iter < MAX_ITERATIONS; iter++) { if (iter > int(abs(float(minR - maxR))) + 1) break; val = (iter - int(abs(float(minR - maxR)))) + 1;
#define END_LOOP }


vec2 getFlow(vec2 position)
{
    // Noise aspect is determined by screen height
    vec2 noise = vec2(0, -1);//normalNoise(position / resolution.y, noiseScale, 354.459).xy;

    vec3 vectorTex = texture2D(vectorTexture, position / resolution.xy).xyz;

    vec2 direction = mix(noise, vectorTex.xy, vectorTex.z);

    return normalize(direction);
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

    int i, x;
    UNROLLABLE_LOOP(-kernSize, kernSize, i, x)
        int j, y;
        UNROLLABLE_LOOP(-kernSize, kernSize, j, y)

            // Get UV coordinates with offset
            vec2 offsetCoords = fragCoord + vec2(x, y);
            vec2 uv = offsetCoords / resolution.xy;

            // Sample particle buffer
            vec2 fragment = texture2D(sourceTexture, uv).xy;
        
        #ifdef NORMALIZE_VALUE
            // Unpack normalized values
            fragment = fragment * resolution.xy;
        #endif

            // Is the particle uninitialized?
            if (fragment == vec2(0))
            {
                // Probability of initializing
                if (rand(uv) > distribution) continue; // Don't initialize particle- skip iteration
                fragment = offsetCoords; // Initialize particle at position 
            }

            // Move particle with flow
            fragment += getFlow(offsetCoords) * particleSpeed;

            // If the particle is close enough to pixel, use it
            if (abs(fragment.x - fragCoord.x) < particleSize && abs(fragment.y - fragCoord.y) < particleSize) 
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
    fade = max(0.0, fade - fadeSpeed * deltaTime);

    fragColor.xyz = vec3(particle, fade);

#ifdef NORMALIZE_VALUE
    // Normalize particle position
    fragColor.xy = fragColor.xy / resolution.xy;
#endif

    // If there is a particle, reset fade
    if (particle != vec2(0.0))
        fragColor.z = 1.0;
}

void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }
