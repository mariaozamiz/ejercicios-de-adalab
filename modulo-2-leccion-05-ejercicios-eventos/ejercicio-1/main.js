'use strict';

const button = document.querySelector('.button');
const paragraph = document.querySelector('.p');

function showMessage() {
    paragraph.innerHTML = 'Mi primer click, ¡ole yo!';
}
button.addEventListener('click', showMessage);
