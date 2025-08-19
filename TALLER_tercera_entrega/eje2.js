function contarVocales(frase) {
    let textoMin = frase.toLowerCase();
    let total = 0;

    for (let indice = 0; indice < textoMin.length; indice++) {
        let caracter = textoMin[indice];
        if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
            total++;
        }
    }
    return total;
}

console.log(contarVocales("sofia"));
