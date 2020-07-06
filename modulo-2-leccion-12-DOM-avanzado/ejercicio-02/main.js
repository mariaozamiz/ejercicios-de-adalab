'use strict';

const selectField = document.querySelector('.js__select--cities');
const imageContainer1 = document.querySelector('.js__image--1');
const imageContainer2 = document.querySelector('.js__image--2');
const imageContainer3 = document.querySelector('.js__image--3');

//Paris pictures route

let paris1 = './img/paris-1.jpeg';
let paris2 = './img/paris-2.jpeg';
let paris3 = './img/paris-3.jpeg';

//Madrid pictures route

let madrid1 = './img/madrid-1.jpeg';
let madrid2 = './img/madrid-2.jpeg';
let madrid3 = './img/madrid-3.jpeg';

//NY pictures route

let ny1 = './img/ny-1.jpeg';
let ny2 = './img/ny-2.jpeg';
let ny3 = './img/ny-3.jpeg';

//Madrid pictures route

function printImages() {
    let selectedCity = selectField.value;
    if (selectedCity === 'Madrid') {
        imageContainer1.src = madrid1;
        imageContainer2.src = madrid2;
        imageContainer3.src = madrid3;
    }
    if (selectedCity === 'Paris') {
        imageContainer1.src = paris1;
        imageContainer2.src = paris2;
        imageContainer3.src = paris3;
    }
    if (selectedCity === 'Nueva York') {
        imageContainer1.src = ny1;
        imageContainer2.src = ny2;
        imageContainer3.src = ny3;
    }
}

selectField.addEventListener('change', printImages);
