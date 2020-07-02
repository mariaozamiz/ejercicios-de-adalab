'use strict';

//EJERCICIO 4 - Mi lista de tareas

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name:
            'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,
    },
];

//access HTML

const taskList = document.querySelector('.js__task--list');
const taskCounterPrinter = document.querySelector('.js__task--counter');

//functions

function printNumberofTasks() {
    let taskCounter = 0;
    for (let i = 0; i < tasks.length; i++) {
        taskCounter++;
    }
    taskCounterPrinter.innerHTML = `Hoy tienes ${taskCounter} tareas pendientes`;
}

function printAllTasks() {
    let content = taskList.innerHTML;
    for (let i = 0; i < tasks.length; i++) {
        content.push = tasks[i].name;
    }
    if (tasks[i].completed === true) {
        taskList.classList.add('done');
    } else {
    }
}

//calls

printNumberofTasks();
printAllTasks();
