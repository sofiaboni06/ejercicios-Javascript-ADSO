let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
}
console.log(typeof(persona)); // Imprime "object"
console.log(persona)// Imprime el objeto completo
//metodos comunes de los objetos

persona.correo =  "carlos@gmail.com"; // Agrega una nueva propiedad
console.log(persona);

persona.edad = 31; // Modifica una propiedad existente
console.log(persona); // Imprime el objeto actualizado

console.log(Object.keys(persona)); // Imprime las claves del objeto

//formato json : es un formato ligero y legible tanto para humanos como para máquinas, 
// utilizado para el intercambio de datos entre sistemas informáticos
//existen base de datos (relacionale y no relacionales) 
// dentro de un objeto la direccion  es otro objeto

console.log(persona["edad"]); // Imprime el valor de la propiedad "edad"


//crear funciones : es bloque reutilizable de código que realiza una tarea específica
//se utilizan para dividir el codigo en partes mas pequeñas  y reutilizables 

/*
tiopos de funciones:
1. declaradas 
funcion saludar (nombre) {
rerurn "hola," + nombre;
}
console.log(saludar("Carlos")); // Llama a la función y muestra el resultado
*/

function saludar(nombre) {
    return `Hola  ${nombre}`;
}

let mensaje = saludar("rosa"); // Llama a la función con un argumento

console.log(mensaje)
console.log(saludar("Carlos")); // Llama a la función y muestra el resultado

//2. expresadas (aninomas)

/*
 const despedir = function(nombre) {
    return `Adiós, ${nombre}`;
}   

 console.log(despedir("Carlos")); // Llama a la función y muestra el resultado

*/

const despedir = function(nombre) {
    return `Adiós, ${nombre}`;
}
 
console.log(despedir("miguel")); // Llama a la función y muestra el resultado


//otra forma 
const despedirt = function(nombre) {
    console.log(`Adiós, ${nombre}`);
}

despedirt("maria"); // Llama a la función y muestra el resultado



//3. flecha (arrow functions)

/*
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3)); // Llama a la función y muestra el resultado
*/

const multiplicar = (a, b) => a * b 
console.log(multiplicar(5,9)); // Llama a la función y muestra el resultado

//funcion flecha 

const mensajee = ()=> {
    let mensaje = "Hola desde una función flecha";
    console.log(mensaje)
}
mensajee(); // Llama a la función y muestra el mensaje


