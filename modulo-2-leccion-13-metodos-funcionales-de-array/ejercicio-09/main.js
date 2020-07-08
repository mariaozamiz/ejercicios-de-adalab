'use strict';

const runners = [
    { name: 'Gregory Goyle', time: 56, student: true },
    { name: 'Nymphadora Tonks', time: 9, student: false },
    { name: 'Luna Lovegood', time: 45, student: true },
    { name: 'Cedric Diggory', time: 28, student: true },
    { name: 'Cho Chang', time: 35, student: true },
];

// filtrar por alumnos y luego usar reduce para comparar tiempos

const fasterStudent = runners
    .filter((runner) => runner.student === true)
    .reduce((fasterRunner, runner) => {
        if (fasterRunner.time < runner.time) {
            return fasterRunner;
        } else {
            return runner;
        }
    });
console.log(fasterStudent);
