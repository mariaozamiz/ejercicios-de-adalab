'use strict';

const button = document.querySelector('.js-dog');
let dogName = document.querySelector('.js-dogname');
let dogPictures = document.querySelector('.js-dogimages');

let dogBreeds;

function getRandomBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((breedResponse) => breedResponse.json())
        .then((breedsData) => {
            dogBreeds = Object.keys(breedsData.message);
            const numberOfDogBreeds = dogBreeds.length;
            getRandomNumber(numberOfDogBreeds);
        });
}

function getRandomNumber(numberOfDogBreeds) {
    fetch(
        `https://api.rand.fun/number/integer?min=0&max=${numberOfDogBreeds - 1}`
    )
        .then((numberResponse) => numberResponse.json())
        .then((numberData) => {
            const randomNumber = numberData.result;
            paintDogInfo(randomNumber);
        });
}

function paintDogInfo(randomNumber) {
    const randomBreed = dogBreeds[randomNumber];
    dogName.innerHTML = randomBreed.toUpperCase();

    const promises = [];
    for (let i = 0; i < 25; i++) {
        promises.push(
            fetch(
                `https://dog.ceo/api/breed/${randomBreed}/images/random`
            ).then((response) => response.json())
        );
    }

    Promise.all(promises).then((pictureResponses) => {
        for (const dogphoto of pictureResponses) {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', dogphoto.message);
            dogPictures.appendChild(imgElement);
        }
    });
}

button.addEventListener('click', getRandomBreed);
