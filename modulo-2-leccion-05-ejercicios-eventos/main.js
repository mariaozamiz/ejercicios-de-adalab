'use strict';

// EJERCICIO 1 - hola click

const button = document.querySelector('.button');
const paragraph = document.querySelector('.p');

function showMessage() {
    paragraph.innerHTML = 'Mi primer click, ¡ole yo!';
}
button.addEventListener('click', showMessage);

// EJERCICIO 2 - ¿cómo te llamas?

const button2 = document.querySelector('.button--2');
const textArea = document.querySelector('.input');

function showGreeting() {
    let name = textArea.value;
    console.log(`Hola, ${name}`);
}

button2.addEventListener('click', showGreeting);

// EJERCICIO 3 - Dame ipsum

const paragraph2 = document.querySelector('.p--2');

function duplicateText() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'Lorem ipsum';
    paragraph2.insertAdjacentElement('afterend', newParagraph);
}

paragraph2.addEventListener('mouseover', duplicateText);

// EJERCICIO 4 - Scroll es de colores

const divWithText = document.querySelector('.div');
function setBackgroundColor() {
    if (window.scrollY < 250) {
        divWithText.classList.add('menos--de--250');
        divWithText.classList.remove('mas--de--250');
    } else {
        divWithText.classList.add('mas--de--250');
        divWithText.classList.remove('menos--de--250');
    }
}
window.addEventListener('scroll', setBackgroundColor);
