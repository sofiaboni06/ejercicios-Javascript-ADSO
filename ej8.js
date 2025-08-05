
const prompt = require('prompt-sync')();

const personas = parseInt(prompt("¿Cuántas personas comerán torta de papa? "));


const papaGramos = personas * 200;


const kilosPapa = papaGramos / 1000;
const huevos = Math.ceil(kilosPapa * 5);
const cebollaGramos = kilosPapa * 300;

console.log("Necesitas:");
console.log(papaGramos + " gramos de papa");
console.log(huevos + " huevos");
console.log(cebollaGramos + " gramos de cebolla");


