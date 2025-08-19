function calcularSumaYMedia(valores) {
    let acumulador = 0;

    for (let indice = 0; indice < valores.length; indice++) {
        acumulador = acumulador + valores[indice];
    }

    let media = acumulador / valores.length;
    return "Suma: " + acumulador + "  Promedio: " + media;
}

console.log(calcularSumaYMedia([1, 2, 3, 4, 5]));
