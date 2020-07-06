'use strict';

const numbers = [1, 2, 3];

let ulElement = document.querySelector('.js__list');

for (const number of numbers) {
    const newLi = document.createElement('li');
    let newLiContent = document.createTextNode(`Soy un nuevo li ${number}`);
    newLi.appendChild(newLiContent);
    ulElement.appendChild(newLi);
}
