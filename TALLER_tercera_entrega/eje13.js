function crearEstudiante(nombre, calificaciones) {
    return {
        nombre,
        calificaciones,
        promedio() {
            const suma = this.calificaciones.reduce((total, nota) => total + nota, 0);
            return suma / this.calificaciones.length;
        }
    };
}

const alumno = crearEstudiante("Jefferson", [2, 5, 1, 4, 3.2]);

console.log("Nombre:", alumno.nombre);
console.log("Calificaciones:", alumno.calificaciones);
console.log("Promedio:", alumno.promedio());
