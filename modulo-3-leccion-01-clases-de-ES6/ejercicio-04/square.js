'use strict';

import { Polygon } from './polygon.js';

// subclasses
class Square extends Polygon {
    constructor(side) {
        super(4, side, side);
        this.side = side;
    }
}

export { Square };
