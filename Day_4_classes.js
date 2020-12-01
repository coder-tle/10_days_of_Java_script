class Polygon{
    constructor(array)
    {
        this.array = array;
    }
    perimeter()
    {
        var c = 0;
        for(var i = 0; i<this.array.length; i++)
        c += this.array[i];
        return c;
    }
}