'use strict';

class Square {
    perimeter(side) {
        return side * 4;
    }
    area(side) {
        return side * side;
    }
}

const mySquare = new Square();

let squareside = 9;

console.log(mySquare.perimeter(squareside));
console.log(mySquare.area(squareside));
