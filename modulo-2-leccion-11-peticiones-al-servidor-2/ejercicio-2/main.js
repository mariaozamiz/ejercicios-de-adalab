'use strict';

const inputField = document.querySelector('.js__input');
const searchButton = document.querySelector('.js__searchbutton');

function getResults() {
    let inputValue = inputField.value;
    fetch('https://swapi.dev/api/people/?search=' + inputValue)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let resultList = document.querySelector('.js__list--results');
            for (const info of data.results) {
                let listItem = document.createElement('li');
                listItem.innerHTML = `El personaje ${info.name} es del género ${info.gender}.`;
                resultList.appendChild(listItem);
            }
        })
        .catch((error) => console.log('Error', error));
}

searchButton.addEventListener('click', getResults);
