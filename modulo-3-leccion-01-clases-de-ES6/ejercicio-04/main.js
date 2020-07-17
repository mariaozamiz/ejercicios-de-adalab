'use strict';

import { Square } from './square.js';
import { Triangle } from './triangle.js';

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
