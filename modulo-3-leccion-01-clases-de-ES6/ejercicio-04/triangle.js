'use strict';
import { Polygon } from './polygon.js';

class Triangle extends Polygon {
    constructor(base, height) {
        super(3, base, height);
    }
    area() {
        return super.area() / 2;
    }
}

export { Triangle };
