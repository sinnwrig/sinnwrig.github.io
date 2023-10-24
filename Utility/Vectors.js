// Vector package data types

export class Vector2
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.isVector2 = true;
    }

    Clone()
    {
        return new Vector2(this.x, this.y);
    }
}


export class Vector3
{
    constructor(x, y, z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.isVector3 = true;
    }

    Clone()
    {
        return new Vector3(this.x, this.y, this.z);
    }
}


export class Vector4
{
    constructor(x, y, z, w)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.isVector4 = true;
    }

    Clone()
    {
        return new Vector4(this.x, this.y, this.z, this.w);
    }
}