function convertirEnMayusculas(listaNombres) {
    let nombresConvertidos = [];
    for (let indice = 0; indice < listaNombres.length; indice++) {
        nombresConvertidos.push(listaNombres[indice].toUpperCase());
    }
    return nombresConvertidos;
}

console.log(convertirEnMayusculas(["pablo", "sofia", "jefferson"]));
console.log(convertirEnMayusculas(["sebastian", "dorado", "jhoan"]));
