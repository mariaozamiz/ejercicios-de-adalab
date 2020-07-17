'use strict';

class Square {
    perimeter(side) {
        console.log(side * 4);
    }
    area(side) {
        console.log(side * side);
    }
}

const side = 9;
const square = new Square();
square.perimeter(side);
square.area(side);
