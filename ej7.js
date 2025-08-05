
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Ingresa un número de dos dígitos: "));

const decenas = Math.floor(numero / 10);
const unidades = numero % 10;

console.log("Decenas: " + decenas);
console.log("Unidades: " + unidades);
