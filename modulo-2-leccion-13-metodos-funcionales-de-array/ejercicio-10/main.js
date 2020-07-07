'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//Encontrar a la usuaria con pin 5232 con método "find"

const errorUser = users.find((user) => user.pin === 5232);
console.log(errorUser);

// Encontrar la posición de la usuaria en el listado con método "findIndex"

const errorUserIndex = users.findIndex((user) => user.pin === 5232);
console.log(errorUserIndex);

// Eliminar a la usuaria del listado con método "splice"

const deletedUser = users.splice(3, 1);
console.log(deletedUser);
console.log(users);
