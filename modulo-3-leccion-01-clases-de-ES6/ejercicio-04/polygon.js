'use strict';

// superclass
class Polygon {
    //atributes
    constructor(numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }
    perimeter() {
        return this.base * this.numberOfSides;
    }
    area() {
        return this.base * this.height;
    }
}

export { Polygon };
