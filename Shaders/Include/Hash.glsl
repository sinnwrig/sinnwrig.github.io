#ifndef HASH_INCLUDED
#define HASH_INCLUDED

// Hash without Sine
// Original at https://www.shadertoy.com/view/4djSRW
// Creative Commons Attribution-ShareAlike 4.0 International Public License
// Created by David Hoskins.

float hash13(vec3 p3)
{
    p3  = fract(p3 * .1031);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
}


vec2 hash21(float p)
{
    vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

#endif