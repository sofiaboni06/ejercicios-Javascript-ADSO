const prompt = require('prompt-sync')();

let a = prompt("Ingresa el valor de la variable a: ");
let b = prompt("Ingresa el valor de la variable b: ");

console.log("Antes del intercambio: a = " + a + ", b = " + b);

let temp = a;
a = b;
b = temp;

console.log("Después del intercambio: a = " + a + ", b = " + b);