function sustituirValor(lista, antiguo, nuevo) {
    for (let indice = 0; indice < lista.length; indice++) {
        if (lista[indice] === antiguo) {
            lista[indice] = nuevo;
        }
    }
    return lista;
}

console.log(sustituirValor([1, 2, 3, 4], 4, 45));
console.log(sustituirValor(["rojo", "azul", "verde"], "azul"));
