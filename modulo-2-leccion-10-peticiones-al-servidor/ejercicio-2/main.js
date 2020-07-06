'use strict';

// EJERCICIO 2 - Chihuahuas, chihuahuas por todas partes

function getDogImage() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then((response) => response.json())
        .then((data) => {
            const img = document.querySelector('img');
            img.src = data.message;
            img.alt = 'chihuahua';
        });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);