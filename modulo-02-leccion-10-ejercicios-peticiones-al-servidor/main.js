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

function getUserResults() {
    let inputValue = inputField.value;
    fetch('https://api.github.com/users/' + inputValue)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.js__username--field').innerHTML =
                data.name;
            document.querySelector('.js__imgframe--field').src =
                data.avatar_url;
            document.querySelector('.js__repositoriesnumber--field').innerHTML =
                data.public_repos;
        });
}

searchButton.addEventListener('click', getUserResults);

// EJERCICIO 4 - Listado de repos de una organización en Github

const inputField2 = document.querySelector('.js__input--2');
const searchButton2 = document.querySelector('.js__searchbutton--2');
const repoList = document.querySelector('.js__repo-list');

function getOrgResults() {
    let inputValue2 = inputField2.value;
    console.log(inputValue2);
    fetch('https://api.github.com/orgs/' + inputValue2)
        .then((response2) => response2.json())
        .then((data2) => {
            return fetch(
                'https://api.github.com/orgs/' + inputValue2 + '/repos'
            )
                .then((response3) => response3.json())
                .then((data3) => {
                    let repoList = document.querySelector('.js__repo-list');
                    for (const repo of data3) {
                        let listItem = document.createElement('li');
                        listItem.innerHTML = repo.name;
                        repoList.appendChild(listItem);
                    }
                });
        });
}
searchButton2.addEventListener('click', getOrgResults);
