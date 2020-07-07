'use strict';

const times = [56, 9, 45, 28, 35];

const averageTime = times.reduce((acc, number) => acc + number);
console.log(`El tiempo medio de vuelo es ${averageTime / 5}`);
