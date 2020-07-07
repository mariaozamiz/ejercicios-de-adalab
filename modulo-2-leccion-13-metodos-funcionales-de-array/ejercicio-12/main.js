'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// ordenar a las usuarias por nombre alfabético
// users.sort((user) => user.name);
// console.log(users);

// ordenar a las usuarias por número de pin
users.sort((user, pin) => user.pin - user.pin);
console.log(users);
// times.sort((a, b) => a - b);
// console.log(times);
