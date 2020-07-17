'use strict';

// class
class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        console.log(this.side * 4);
    }
    area() {
        console.log(this.side * this.side);
    }
}

const square1 = new Square(3);
const square2 = new Square(7);
const square3 = new Square(1);

square1.perimeter();
square1.area();
square2.perimeter();
square2.area();
square3.perimeter();
square3.area();
