'use strict';

// EJERCICIO 5 - jugando con el teclado

// EJERCICIO 6 - Información instantánea
//en campos de texto keydown se produce antes de que cambie el valor, mientras que input se produce cuando cambia el valor

// const textBox = document.querySelector('.input');
// const newParagraph = document.querySelector('.paragraph');

// function writeOnParagraph(event) {
//     let textInfo = event.currentTarget.value;
//     newParagraph.innerHTML = textInfo;
// }

// textBox.addEventListener('input', writeOnParagraph);

// EJERCICIOS 7 y 8 - Más botones

// const firstButton = document.querySelector('.button');
// const secondButton = document.querySelector('.button-2');

// function changeButtonBackgroundColor(event) {
//     event.currentTarget.classList.toggle('activated');
// }
// firstButton.addEventListener('click', changeButtonBackgroundColor);
// secondButton.addEventListener('click', changeButtonBackgroundColor);

// EJERCICIO 10 - ¿Qué vemos esta noche?

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const thirdButton = document.querySelector('.button-3');

function showFilmOptions() {
    thirdButton.insertAdjacentElement('afterend', ul);
}

thirdButton.addEventListener('click', showFilmOptions);
