function reversoLista(lista) {
    let resultado = [];
    for (let indice = lista.length - 1; indice >= 0; indice--) {
        resultado.push(lista[indice]);
    }
    return resultado;
}

console.log(reversoLista([1, 2, 3, 4, 5]));
console.log(reversoLista(["a", "b", "c"]));
