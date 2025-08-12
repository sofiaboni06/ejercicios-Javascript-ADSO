//areglos 
/*
Conceptos Clave 
• Un array es una colección ordenada de elementos. 
• Los elementos pueden ser de cualquier tipo: números, strings, objetos, etc. 
• Se accede a los elementos usando índices, comenzando desde 0.
*/

let frutas = ["manzana", "banana", "cereza"];
console.log(frutas[0]); // Accede al primer elemento: "manzana"
console.log(frutas.length); // Accede al segundo elemento: "banana"
console.log(frutas[2]); // Accede al tercer elemento: "cereza"
frutas.push("banana"); // Agrega un nuevo elemento al final del array
console.log(frutas); // Muestra el array actualizado: ["manzana", "banana", "cereza", "banana"]
frutas.pop(); // Elimina el último elemento del array
console.log(frutas); // Muestra el array actualizado: ["manzana", "banana", "cereza"]
frutas.unshift("kiwi"); // Agrega un nuevo elemento al inicio del array
console.log(frutas); // Muestra el array actualizado: ["kiwi", "manzana", "banana", "cereza"]


for (let fruta of frutas) {
    console.log(fruta); // Muestra cada fruta en el array
}

frutas.forEach(fruta => {
    console.log(fruta); // Muestra cada fruta en el array
});

let numeros =[]

numeros.push(1);
numeros.push(2);
numeros.unshift(20)
console.log(numeros); // Muestra el array actualizado: [20, 1, 2]
numeros.push(100);
numeros.push(25);
console.log(numeros); // Muestra el array actualizado: [20, 1, 2, 3, 4]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Muestra cada número en el array
    // Aquí puedes realizar operaciones con cada número
}

numeros.forEach((numero, i) => {
    console.log(`Índice: ${i}, Número: ${numero}`); // Muestra el índice y el número en el array
});

let valores = [10, 20, 30, 40, 50];
let cuadrados = valores.map(valor => valor * valor);
console.log(cuadrados); // Muestra el array de cuadrados: [100, 400, 900, 1600, 2500]
 
let cuadrados2 = valores.map(function(valor) {
    return valor * valor;
}   );
console.log(cuadrados2); // Muestra el array de cuadrados: [100, 400, 900, 1600, 2500]  