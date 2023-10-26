import { Vector3 } from "./Vectors.js";

// Colorspace conversion utilities

export function HslToRgb(hsl) 
{
    let h = hsl.x;
    let s = hsl.y;
    let l = hsl.z;

    let r, g, b;
  
    if (s=== 0) 
    {
        r = g = b = l; // achromatic
    } 
    else 
    {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = HueToRGB(p, q, h + 1 / 3);
        g = HueToRGB(p, q, h); 
        b = HueToRGB(p, q, h - 1 / 3);
    }
  
    return new Vector3(r, g, b);
}


function HueToRGB(p, q, t) 
{
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}


export function RgbToHsl(rgb) 
{
    let r = rgb.x;
    let g = rgb.y;
    let b = rgb.z;

    const vmax = Math.max(r, g, b), vmin = Math.min(r, g, b);
    let h, s, l = (vmax + vmin) / 2;
  
    if (vmax === vmin) 
    {
        return new Vector3(0, 0, l); // achromatic
    }
  
    const d = vmax - vmin;
    s = l > 0.5 ? d / (2 - vmax - vmin) : d / (vmax + vmin);
    if (vmax === r) h = (g - b) / d + (g < b ? 6 : 0);
    if (vmax === g) h = (b - r) / d + 2;
    if (vmax === b) h = (r - g) / d + 4;
    h /= 6;
  
    return new Vector3(h, s, l);
}


export function HexToRgb(hex) 
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result)
    {
        let rgb255 = new Vector3(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));

        rgb255.x /= 256;
        rgb255.y /= 256;
        rgb255.z /= 256;

        return rgb255;
    }

    return null;
}