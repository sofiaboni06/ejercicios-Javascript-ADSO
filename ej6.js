
const prompt = require('prompt-sync')();


const horas = parseInt(prompt("Ingresa la cantidad de horas: "));


const minutos = parseInt(prompt("Ingresa la cantidad de minutos: "));


const segundosTotales = (horas * 3600) + (minutos * 60);


console.log("El tiempo total en segundos es: " + segundosTotales + " segundos");


