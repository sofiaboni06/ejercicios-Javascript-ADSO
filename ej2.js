const prompt = require('prompt-sync')();

let lado = prompt("escribe el lado del cuadrado");


let area = lado * lado;

let perimetro = 4 * lado;

console.log("El lado del cuadrado es: " + lado);
console.log("El área del cuadrado es: " + area);
console.log("El perímetro del cuadrado es: " + perimetro);
    

