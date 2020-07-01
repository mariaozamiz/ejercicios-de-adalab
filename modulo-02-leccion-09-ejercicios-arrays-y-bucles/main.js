'use strict';

// EJERCICIO 1 - Numeritos

let arr = [];
let number = 0;

function get100Numbers() {
    for (let i = 0; i < 100; i++) {
        number++;
        arr.push(number);
        console.log(number);
    }
}

get100Numbers();

// EJERCICIO 2 - Sotiremun

function getReversed100Numbers() {
    get100Numbers();
    arr.reverse();
}

getReversed100Numbers();
console.log(arr);

// EJERCICIO 3 - The numbers

const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenLostNumbers = [];
let multiple3LostNumbers = [];

function bestLostNumber(number) {
    for (const number of lostNumbers) {
        if (number % 2 === 0) {
            evenLostNumbers.push(number);
        } else if (number % 3 === 0) {
            multiple3LostNumbers.push(number);
        }
    }
    const EvenAndMultiple3LostNumbers = evenLostNumbers.concat(
        multiple3LostNumbers
    );
    console.log(EvenAndMultiple3LostNumbers);
}

bestLostNumber();
