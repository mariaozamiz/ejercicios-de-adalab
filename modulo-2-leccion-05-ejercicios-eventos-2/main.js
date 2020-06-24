'use strict';

// EJERCICIO 5 - jugando con el teclado

// const pageBackground = document.querySelector('body');
// function changeBackgroundColor(event) {
//     if (event.key === 'r') {
//         pageBackground.classList.add('background__color--red');
//         pageBackground.classList.remove('background__color--purple');
//     } else if (event.key === 'p') {
//         pageBackground.classList.add('background__color--purple');
//         pageBackground.classList.remove('background__color--red');
//     }
// }
// document.addEventListener('keydown', changeBackgroundColor);

// EJERCICIO 6 - Información instantánea
//en campos de texto keydown se produce antes de que cambie el valor, mientras que input se produce cuando cambia el valor

const textBox = document.querySelector('.input');
const newParagraph = document.querySelector('.paragraph');

function writeOnParagraph(event) {
    let textInfo = event.currentTarget.value;
    newParagraph.innerHTML = textInfo;
}

textBox.addEventListener('input', writeOnParagraph);

// EJERCICIOS 7 y 8 - Más botones

const firstButton = document.querySelector('.button');
const secondButton = document.querySelector('.button-2');

function changeButtonBackgroundColor(event) {
    event.currentTarget.classList.toggle('activated');
}
firstButton.addEventListener('click', changeButtonBackgroundColor);
secondButton.addEventListener('click', changeButtonBackgroundColor);
