'use strict';

const button = document.querySelector('.js-dog');
let dogName = document.querySelector('.js-dogname');
let dogPicture = document.querySelector('.js-dogpicture');

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
    fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
        .then((pictureResponse) => pictureResponse.json())
        .then((data) => {
            dogPicture.src = data.message;
            dogPicture.alt = `${randomBreed}`;
        });
}

button.addEventListener('click', getRandomBreed);
