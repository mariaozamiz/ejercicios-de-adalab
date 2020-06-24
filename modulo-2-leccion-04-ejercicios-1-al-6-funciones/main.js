'use strict';

// // EJERCICIO 1 - función multiplicación

// function mult(a, b) {
//     const result = a * b;
//     return result;
// }
// console.log(mult(2, 2));

// // EJERCICIO 2 - función media

// function media(a, b, c, d) {
//     const result = (a + b + c + d) / 4;
//     return result;
// }
// console.log(media(2, 3, 5, 8));

// EJERCICIO 3 - ticket con IVA

// function priceWithTaxes(price) {
//     let taxes = price * 0.21;
//     let result = taxes + price;
//     console.log(
//         'esto cuesta ' +
//             price +
//             ': los impuestos son ' +
//             taxes +
//             ' y el total es ' +
//             result
//     );
// }

// priceWithTaxes(10);

// EJERCICIO 4 - pares o nones

// }
// console.log(isItEven(11));

// EJERCICIOS 5 - queryselector para todas

// function getEl(selector) {
//     const element = document.querySelector(selector);
//     // return element;
//     console.log(element);
// }
// getEl('.h1');

// EJERCICIO 6 - logueando errores

// function getEl(selector) {
//     const element = document.querySelector(selector);
//     if (!element) {
//         console.log(
//             `No existe ningún elemento con clase, id o tag llamado ${selector}`
//         );
//     } else {
//         // return element;
//         console.log(element);
//     }
// }
// getEl('.h6');

// EJERCICIO 7 - combinando funciones

// function getEl(selector) {
//     const element = document.querySelector(selector);
//     return element;
// }

// function evenOrOdd(a) {
//     const number = a % 2;
//     if (number === 0) {
//         console.log(`El número ${a} es Par`);
//     } else {
//         console.log(`El número ${a} es Impar`);
//     }
// }

// const text = getEl('.p');

// const value = parseInt(text.innerHTML);

// console.log(value);
// evenOrOdd(value);

// EJERCICIO 10 - calculador de modelo de caja

function calculateWidth(borderBox, width, padding, border) {
    const totalPadding = padding * 2;
    const totalBorder = border * 2;

    if (borderBox === 'border-box') {
        const result = width + totalPadding + totalBorder;
        console.log(
            `El ancho del contenido es: ${width} y el ancho total de la caja es: ${result}`
        );
    } else {
        console.log('No me estás indicando que es border-box');
    }
}

calculateWidth('border-nai', 10, 2, 1);
