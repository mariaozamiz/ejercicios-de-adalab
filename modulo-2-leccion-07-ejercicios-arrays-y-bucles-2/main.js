'use strict';

// EJERCICIO 7 - A story of adalabers

// let adalabers = [
//     {
//         name: 'María',
//         age: 29,
//         job: 'diseñadora',
//     },

//     {
//         name: 'Lucía',
//         age: 31,
//         job: 'ingeniera química',
//     },

//     {
//         name: 'Susana',
//         age: 34,
//         job: 'periodista',
//     },

//     {
//         name: 'Rocío',
//         age: 25,
//         job: 'actriz',
//     },

//     {
//         name: 'Inmaculada',
//         age: 21,
//         job: 'diseñadora',
//     },
// ];

// function countAdalabers() {
//     console.log(adalabers.length);
// }
// function averageAge() {
//     let sumAges = 0;
//     for (let i = 0; i < adalabers.length; i++) {
//         sumAges = sumAges + adalabers[i].age;
//     }
//     let average = sumAges / adalabers.length;
//     return average;
// }

// function theYoungest() {
//     let lowestNum = adalabers[0].age;
//     for (let i = 0; i < adalabers.length; i++) {
//         if (adalabers[i].age < lowestNum) {
//             lowestNum = adalabers[i].age;
//         }
//     }
//     return lowestNum;
// }

// function designers() {
//     let designerAdalabers = 0;
//     for (let i = 0; i < adalabers.length; i++) {
//         if (adalabers[i].job === 'diseñadora') {
//             designerAdalabers = designerAdalabers + 1;
//         }
//     }
//     return designerAdalabers;
// }

// // countAdalabers();
// // console.log(averageAge());
// // console.log(theYoungest());
// // console.log(designers());

// EJERCICIO 8 - Botones de alarma

const alarmButtons = document.querySelectorAll('.js-button');
const pageBackground = document.querySelector('body');
console.log(pageBackground);

function changeBackgroundColor() {
    pageBackground.classList.toggle('background');
}

for (const button of alarmButtons) {
    button.addEventListener('click', changeBackgroundColor);
}

// for (let i = 0; i < alarmButtons.length; i++) {
//     alarmButtons[i].addEventListener('click', changeBackgroundColor);
// }
