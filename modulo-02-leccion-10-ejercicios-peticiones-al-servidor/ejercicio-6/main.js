'use strict';

const button = document.querySelector('.js-dog');
const dogName = document.querySelector('.js-dogname');
let randomNumber;

function getRandomBreed() {
    getRandomNumber();
}

function getRandomNumber() {
    fetch(
        'https://api.rand.fun/number/integer?min=1&max=200'
            .then((response) => response.json())
            .then((data) => {
                randomNumber = data;
                console.log(data);
            })
    );
}

//     fetch('https://dog.ceo/api/breed')
//         .then((response) => response.json())
//         .then((data) => {
//             dogName.innerHTML = data.name;
//             const img = document.querySelector('img');
//             img.src = data.message;
//         });
// }

button.addEventListener('click', getRandomBreed);

// function getOrgResults() {
//     let inputValue = inputField.value;
//     console.log(inputValue);
//     fetch('https://api.github.com/orgs/' + inputValue)
//         .then((response) => response.json())
//         .then((data) => {
//             return fetch('https://api.github.com/orgs/' + inputValue + '/repos')
//                 .then((response) => response.json())
//                 .then((data) => {
//                     let repoList = document.querySelector('.js__repo-list');
//                     for (const repo of data) {
//                         let listItem = document.createElement('li');
//                         listItem.innerHTML = repo.name;
//                         repoList.appendChild(listItem);
//                     }
//                 });
//         });
