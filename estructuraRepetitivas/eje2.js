/* 
hacer un script que lea un numero entreo y que como resultado imprma en pantalla la suma de sus digitos
*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número entero: "));
let suma = 0;
let original = numero;
numero = Math.abs(numero); // Para manejar negativos

while (numero > 0) {
    let digito = numero % 10;
    suma += digito;
    numero = Math.floor(numero / 10);
}
console.log(`La suma de los dígitos de ${original} es: ${suma}`);



/*

if (numero>=10) {
    console.log("El número es mayor o igual a 10, se realizará la suma de sus dígitos.");
    // Convertir el número a una cadena para iterar sobre sus dígitos
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);
        console.log(`El dígito ${numero[i]} se suma a la suma total, ahora es: ${suma}`);
    }
    console.log(`La suma total de los dígitos es: ${suma}`);
}else {
    
   for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
    console.log(`El dígito ${numero[i]} se suma a la suma total, ahora es: ${suma}`);
}
    console.log("El número es menor a 10, no se puede realizar la suma de dígitos.");
    return; // termina el script si el número es menor a 10
}
    */
/*

for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
    console.log(`El dígito ${numero[i]} se suma a la suma total, ahora es: ${suma}`);
}
    */


