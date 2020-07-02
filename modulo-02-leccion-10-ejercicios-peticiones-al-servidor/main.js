'use strict';

// EJERCICIO 1 - Número aleatorio

function getInteger() {
    fetch('https://api.rand.fun/number/integer?min=0&max=9999')
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.js-result').innerHTML = data.result;
        });
}
document.querySelector('.js-emoji').addEventListener('click', getInteger);

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

// EJERCICIO 3 - Buscador de usuarias GitHub

const inputField = document.querySelector('.js__input');
const searchButton = document.querySelector('.js__searchbutton');

function getResults() {
    let inputValue = inputField.value;
    fetch('https://api.github.com/users/' + inputValue)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('.js__username--field').innerHTML =
                data.name;
            document.querySelector('.js__imgframe--field').src =
                data.avatar_url;
            document.querySelector('.js__repositoriesnumber--field').innerHTML =
                data.public_repos;
        });
}

searchButton.addEventListener('click', getResults);

// EJERCICIO 4 - Listado de repos de una organización en Github
