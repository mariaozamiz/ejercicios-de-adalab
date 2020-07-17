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

// subclasses
class Square extends Polygon {
    constructor(side) {
        super(4, side, side);
        this.side = side;
    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super(3, base, height);
    }
    area() {
        return super.area() / 2;
    }
}

// instances
const mySquare = new Square(4);
const myTriangle = new Triangle(4, 3);

// calls
console.log(
    `El cuadrado tiene un perimetro de ${mySquare.perimeter(
        4
    )} cm y un área de ${mySquare.area(4)} cm`
);
console.log(
    `El triángulo tiene un perimetro de ${myTriangle.perimeter()} cm y un área de ${myTriangle.area()} cm`
);
