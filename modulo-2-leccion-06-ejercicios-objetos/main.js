'use strict';

// // EJERCICIOS 1, 2 y 3 - Bio de Adalaber

// const adalaber1 = {
//     name: 'Susana',
//     age: 34,
//     job: 'periodista',
//     distance: '50',
//     run: function () {
//         console.log('Estoy corriendo');
//     },
//     runAMarathon: function (distance) {
//         console.log(
//             `Estoy corriendo un maratón de ${this.distance} kilómetros`
//         );
//     },
//     showBio: function () {
//         console.log(
//             `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`
//         );
//     },
// };

// const h1Text = document.querySelector('.title');
// h1Text.innerHTML = `My name is ${adalaber1.name}, I'/m ${adalaber1.age} years old and I'/m a ${adalaber1.job}`;

// adalaber1.runAMarathon();
// adalaber1.showBio();

// // EJERCICIO 4 - Investigando event (objeto)

// const okButton = document.querySelector('.button');
// function showAlert(event) {
//     console.log(event);
// }

// okButton.addEventListener('click', showAlert);

// // EJERCICIO 5 - Investigando los elementos (objetos también)

// const nameAreaBox = document.querySelector('.name--area');
// console.dir(nameAreaBox);

// // EJERCICIO 6 - crear una cesta de peras

let cestaPeras = {
    numMaxPeras: 12,
    numMinPeras: 2,
    numActualPeras: 8,
    numInicialPeras: 0,
    add: function () {
        this.numActualPeras++;
    },
    rest: function () {
        this.numActualPeras--;
    },
    vaciarCesta: function () {
        this.numActualPeras = this.numInicialPeras;
    },
};

// console.log(cestaPeras.numActualPeras);
cestaPeras.add();
console.log(cestaPeras.numActualPeras);
cestaPeras.vaciarCesta();
console.log(cestaPeras.numActualPeras);

// EJERCICIO 7 - estructura de datos para un usuario
