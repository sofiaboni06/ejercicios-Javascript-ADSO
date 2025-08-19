function quitarRepetidos(lista) {
    let unico = [];
    for (let indice = 0; indice < lista.length; indice++) {
        if (unico.indexOf(lista[indice]) === -1) {
            unico.push(lista[indice]);
        }
    }
    return unico;
}

console.log(quitarRepetidos([1, 2, 2, 3, 4, 5]));
console.log(quitarRepetidos(["a", "b", "a", "b"]));
