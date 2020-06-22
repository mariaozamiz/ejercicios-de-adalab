"use strict";

/* const firstDogImage =
    "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
    "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
    "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const list = document.querySelector(".dog__list");
list.innerHTML = `<li><h3>${firstDogName}</h3> <img src="${firstDogImage}"></li><li><h3>${secondDogName}</h3> <img src="${secondDogImage}"></li><li><h3>${thirdDogName}</h3> <img src="${thirdDogImage}"></li>`;
 */
/* Ejercicio 10 */

const hoursDay = 24;

const daysAge = 365;

const totalHoursAge = hoursDay * daysAge;

const myAge = document.querySelector(".age");
/* let convAge = parseInt(myAge); */

const ageValue = parseInt(myAge.innerHTML);

console.log(ageValue);

//console.log(myAge);

const totalHours = totalHoursAge * ageValue;

console.log(
    `He vivido en mis ${ageValue} años un total de ${totalHours} horas`
);
