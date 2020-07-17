'use strict';

const ENDPOINT =
    'https://raw.githubusercontent.com/conchaasensiomr/ejercicios-en-clase-j/master/modulo-2/modulo-2-practica-fin-de-semana-02-fetch/data/users.json';

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

function getFeedInfo() {
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            users = data;
            paintInfo();
        });
}

function paintInfo() {
    const feed = document.querySelector('.js-user-list');
    for (let user of users) {
        //li
        let userFeed = document.createElement('li');
        feed.appendChild(userFeed);
        //div
        let userProfile = document.createElement('div');
        userFeed.appendChild(userProfile);
        //photo
        let userPhoto = document.createElement('img');
        userPhoto.src = user.picture;
        userProfile.appendChild(userPhoto);
        //name
        let userName = document.createElement('h4');
        userName.innerHTML = user.name;
        userProfile.appendChild(userName);
        //comment
        let userComment = document.createElement('p');
        userComment.innerHTML = user.comment;
        userFeed.appendChild(userComment);
    }
}

getFeedInfo();
