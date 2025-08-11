// Estructuras repetitivas en JavaScript
//la estructura de control if 

if (condición1) {
  // Código si condición1 es verdadera
} else if (condición2) {
  // Código si condición2 es verdadera
} else {
  // Código si ninguna condición es verdadera
}

// Estructura de control switch

switch (variable) {
  case valor1:
    // Código si variable es igual a valor1
    break;
  case valor2:
    // Código si variable es igual a valor2
    break;
  // Puedes agregar más casos
  default:
    // Código si variable no coincide con ningún caso anterior
    break;
}


/*
console.log(1)
console.log(2)


console.log(10)
*/
for(let i=1;i<=10;i++){
    console.log(i)
}
/* si yo quiero que el programa inicie en 10 y termmine en 1 cambio el 1 por 10 y el 10 por 1 y el < por > y colo --
for(let i=10;i>=1;i--){
    console.log(i)
}
*/ 
let  i= 1
while(i<=10){
    console.log(i)
    i++
}
/*console.log("Final del programa")
*/


while(true){
    console.log(20)//escribe el 20 al final 
    break // si no pongo el break se va a quedar en un bucle infinito
}
/*
while(true) crea un bucle infinito (se repite para siempre).
console.log(20) imprime 20 una vez.
break detiene el bucle inmediatamente después de la primera vuelta.
*/



//Do-while loop example
// Este bucle se ejecuta al menos una vez si es falso se sale si entra 11 se sale.
i=0
do{
    console.log(i)
    i++
}while(true) // Este bucle se ejecuta una vez, imprime 0 y luego entra en un 
// bucle infinito porque la condición es siempre verdadera.
