
const prompt = require('prompt-sync')();


const kilometros = parseFloat(prompt("Ingresa el número de kilómetros recorridos: "));
const litros = parseFloat(prompt("Ingresa el número de litros consumidos: "));


if (kilometros === 0) {
    console.log("No se puede dividir entre 0. Los kilómetros deben ser mayores a cero.");
} else {
    const consumo = litros / kilometros;
    
    console.log("El consumo de combustible por kilómetro es: " + consumo + " litros/km");
}

    

