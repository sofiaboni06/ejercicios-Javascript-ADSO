//mostrar en pantalla losmultiplos 3 entre dos numeros ingresadios por teclado 
const prompt = require('prompt-sync')();
const numero1 = parseInt(prompt("Ingrese numero entero inferior: "));
const numero2 = parseInt(prompt("Ingrese numero entero superior: "));
let mayor=0 , menor = 0;
if (numero1>numero2) {
    mayor = numero1;
    menor = numero2;
}else {
     mayor = numero2;
     menor = numero1;

}


for(let valor = menor; valor <= mayor; valor++) {
  if (valor% 3 === 0) {
    console.log(valor);
  }
}
/*
for(let valor = menor; valor <= mayor; valor++):

Inicia una variable valor con el valor de menor.
El bucle se repite mientras valor sea menor o igual a mayor.
En cada vuelta, valor aumenta en 1 (valor++).
if (i % 3 === 0):


Esto verifica si valor es múltiplo de 3 (el residuo de dividir valor entre 3 es 0).
console.log(valor);

Si valor es múltiplo de 3, lo muestra en pantalla.
*/

/* otra forma de hacerlo cambia la i ya que en el for se usa valor o que mas se utiliza el valor que se va a iterar
for(let i = menor; i <= mayor; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
*/




