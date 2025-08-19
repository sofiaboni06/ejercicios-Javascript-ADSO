function contarParesYImpares(listaNumeros) {
    let pares = 0;
    let impares = 0;

    for (let indice = 0; indice < listaNumeros.length; indice++) {
        let valor = listaNumeros[indice];
        if (valor % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return {
        cantidadPares: pares,
        cantidadImpares: impares
    };
}

console.log(contarParesYImpares([10, 21, 30, 41, 55, 60]));
