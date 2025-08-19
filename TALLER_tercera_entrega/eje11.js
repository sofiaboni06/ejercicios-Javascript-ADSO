function obtenerCapital(nombrePais) {
    const capitales = new Map([
        ["colombia", "Bogotá"],
        ["suiza", "Berna"],
        ["camboya", "Nom Pen"],
        ["paises bajos", "Ámsterdam"],
        ["australia", "Canberra"],
        ["canadá", "Ottawa"],
        ["japon", "Tokio"],
        ["china", "Pekín"],
        ["rusia", "Moscú"],
        ["sudáfrica", "Pretoria"]
    ]);

    return capitales.get(nombrePais.toLowerCase());
}

console.log(obtenerCapital("suiza"));
console.log(obtenerCapital("australia"));
console.log(obtenerCapital("colombia"));
