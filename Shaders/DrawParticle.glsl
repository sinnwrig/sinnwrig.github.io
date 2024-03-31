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

uniform vec3 directionParams;


uniform float boxFade;
uniform vec4 boxRect;


#define MAX_ITERATIONS 10

#include "../Include/Noise.glsl"

#define PACK_POSITION


#define UNROLLABLE_LOOP(minR, maxR, iter, val) for (int iter = 0; iter < MAX_ITERATIONS; iter++) { if (iter > int(abs(float(minR - maxR))) + 1) break; val = (iter - int(abs(float(minR - maxR)))) + 1;
#define END_LOOP }


vec2 projectVector(vec2 v, vec2 u) 
{
    float dotProduct = dot(v, u);
    float uLengthSq = dot(u, u);
    vec2 projectedVec = (dotProduct / uLengthSq) * u;
    return projectedVec;
}


float inverseLerp(float a, float b, float x) {
    return clamp((x - a) / (b - a), 0.0, 1.0);
}


vec2 projectCollision(vec2 velocity, vec2 line, float edge0, float edge1, float dist, bool isX)
{
    float step = inverseLerp(edge0, edge1, dist);

    if (isX)
        line.x *= sign(velocity.x);
    else
        line.y *= sign(velocity.y);

    return normalize(mix(velocity, line, 0.5));
}


bool smallest(float value, float v2, float v3, float v4)
{
    return value < v2 && value < v3 && value < v4;
}


vec2 getPush(vec2 position, vec2 velocity)
{
    float leftDist = boxRect.x - position.x; // Distance from left of box
    float rightDist = position.x - (boxRect.x + boxRect.z); // Distance from right of box
    float downDist = boxRect.y - position.y; // Distance from top of box
    float upDist = position.y - (boxRect.y + boxRect.w); // Distance from bottom of box

    if (leftDist < 0.0 && rightDist < 0.0 && upDist < 0.0 && downDist < 0.0)
        return vec2(0, 0);

    if (leftDist > boxFade || rightDist > boxFade || upDist > boxFade || downDist > boxFade)
        return velocity;

    if (smallest(leftDist, rightDist, upDist, downDist))
        velocity = projectCollision(velocity, vec2(0, 1), boxFade, .0, leftDist, false);

    else if (smallest(rightDist, leftDist, upDist, downDist))
        velocity = projectCollision(velocity, vec2(0, 1), boxFade, .0, rightDist, false);

    else if (smallest(upDist, leftDist, rightDist, downDist))
        velocity = projectCollision(velocity, vec2(1, 0), boxFade, .0, upDist, true);
        
    else if (smallest(downDist, leftDist, rightDist, upDist))
        velocity = projectCollision(velocity, vec2(1, 0), boxFade, .0, downDist, true);
    
    return velocity;
}


vec2 getFlow(vec2 position)
{
    // Noise aspect is determined by screen height
    vec2 noise = mix(directionParams.xy, normalNoise(position / resolution.y, noiseScale, 354.459).xy, directionParams.z);

    vec3 vectorTex = texture2D(vectorTexture, position / resolution.xy).xyz;

    vec2 direction = normalize(mix(noise, vectorTex.xy, vectorTex.z));

    //vec2 push = getPush(position, direction);

    return direction;//push;
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
        
        #ifdef PACK_POSITION
            // Unpack particle position
            fragment = fragment * resolution.xy;
        #endif

            // Is the particle uninitialized?
            if (fragment == vec2(0.0))
            {
                // Probability of initializing
                if (rand(uv) > distribution) continue; // Don't initialize particle- skip iteration
                fragment = offsetCoords; // Initialize particle at position 
            }

            // Move particle with flow
            fragment += getFlow(offsetCoords) * particleSpeed;

            // If the particle is close enough to pixel, save it
            if (abs(fragment.x - fragCoord.x) < particleSize && abs(fragment.y - fragCoord.y) < particleSize) 
                return fragment;
        END_LOOP
    END_LOOP

    // No particle nearby
    return vec2(0);
}


void main() 
{
    vec2 particle = sampleParticle(gl_FragCoord.xy);
    
    float fade = texture2D(sourceTexture, gl_FragCoord.xy / resolution.xy).z;
    fade = max(0.0, fade - fadeSpeed * deltaTime);

    gl_FragColor.xyz = vec3(particle, fade);

#ifdef PACK_POSITION
    // Bring particle position to 0-1 range
    gl_FragColor.xy = gl_FragColor.xy / resolution.xy;
#endif

    // If there is a particle, reset fade
    if (particle != vec2(0.0))
        gl_FragColor.z = 1.0;
}