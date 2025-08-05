
const prompt = require('prompt-sync')();


const numero1 = parseInt(prompt("Escribe el primer número entero: "));
const numero2 = parseInt(prompt("Escribe el segundo número entero: "));
const numero3 = parseInt(prompt("Escribe el tercer número entero: "));


const media = (numero1 + numero2 + numero3) / 3;


console.log("La media de los tres números es: " + media);


