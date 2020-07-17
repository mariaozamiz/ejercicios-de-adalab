'use strict';

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

// const side = 9;
const square = new Square(4);
const square2 = new Square(3);
const square3 = new Square(7);
const square4 = new Square(1);
square.perimeter();
square.area();
square2.perimeter();
square2.area();
