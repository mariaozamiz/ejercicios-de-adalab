'use strict';

const button = document.querySelector('.button');
const textArea = document.querySelector('.input');

function showGreeting() {
    let name = textArea.value;
    console.log(`Hola, ${name}`);
}

button.addEventListener('click', showGreeting);
