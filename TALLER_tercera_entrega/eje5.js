function totalPalabras(frase) {
    let fragmentos = frase.trim().split(" ");
    let cantidad = 0;

    for (let indice = 0; indice < fragmentos.length; indice++) {
        if (fragmentos[indice] !== "") {
            cantidad++;
        }
    }

    return cantidad;
}

console.log(totalPalabras("analisis y desarrollo de software"));
