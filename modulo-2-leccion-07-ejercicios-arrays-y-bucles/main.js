'use strict';
// EJERCICIO 1 - Películas

// const arr = ['Una rubia muy legal', 'Este cuerpo no es el mío', 'Zoolander'];

// function workWithMovies() {
//     arr[3] = 'Master and Commander';
//     arr[0] = 'Harry Potter y el prisionero de Azkaban';
//     arr[1] = 'Titanic';
//     console.log(arr);
// }

// workWithMovies();

// EJERCICIO 2

// for (let i = 1; i < 11; i++) {
//     console.log(`Voy por la vuelta ${i}`);
// }

// EJERCICIO 3

// let acc = 0;

// for (let i = 0; i < 10; i++) {
//     acc += 2;
//     console.log(acc);
// }
// console.log(`El resultado es: ${acc}`);

// EJERCICIO 4 - la luna del cazador

// let hunterMoonYear = 2017;
// for (let i = 0; i < 15; i++) {
//     hunterMoonYear += 3;
//     console.log(`habrá luna del cazador en el año ${hunterMoonYear}`);
// }

// EJERCICIO 5 - la media

// const arrNumbers = [1, 2, 3, 5, 4, 6];

// function calculateAverage(arr) {
//     let sumNumbers = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumNumbers = sumNumbers + arr[i]; //sumNumbers += arr[i];
//     }
//     let average = sumNumbers / arr.length;
//     return average; // return (sumNumbers / arr.length);
// }

// console.log(calculateAverage(arrNumbers));

// EJERCICIO 6

const favBookTextBoxes = document.querySelectorAll('.js-favbook');
const button = document.querySelector('.js-button');

function checkAffinity() {
    for (const bookInput of favBookTextBoxes) {
        console.log(
            `¡A mí también me encantó ${bookInput.value}! Tenemos mucho en común, humana.`
        );
    }
}

button.addEventListener('click', checkAffinity);
