"use strict";
const paragraphElement = document.querySelector(".paragraph");
paragraphElement.innerHTML = "Hola Mundo";

const titleElement = document.querySelector(".title");
const adalaber = document.getElementById("adalaber--1");
titleElement.innerHTML = titleElement.innerHTML + " " + adalaber.innerHTML;

document.getElementById("password").placeholder = "*******";
