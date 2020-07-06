'use strict';

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
