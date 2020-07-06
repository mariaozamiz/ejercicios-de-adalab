'use strict';

const inputField = document.querySelector('.js__input');
const searchButton = document.querySelector('.js__searchbutton');
const repoList = document.querySelector('.js__repo-list');

function getOrgResults() {
    let inputValue = inputField.value;
    console.log(inputValue);
    fetch('https://api.github.com/orgs/' + inputValue)
        .then((response) => response.json())
        .then((data) => {
            return fetch('https://api.github.com/orgs/' + inputValue + '/repos')
                .then((response) => response.json())
                .then((data) => {
                    let repoList = document.querySelector('.js__repo-list');
                    for (const repo of data) {
                        let listItem = document.createElement('li');
                        listItem.innerHTML = repo.name;
                        repoList.appendChild(listItem);
                    }
                });
        });
}
searchButton.addEventListener('click', getOrgResults);
