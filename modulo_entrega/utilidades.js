// ======================
// EJERCICIO 1
// ======================
export function enRango(numero) {
  if (isNaN(numero)) return "Entrada no válida";
  return (numero >= 10 && numero <= 50) ? "Está en el rango" : "Fuera del rango";
}

// ======================
// EJERCICIO 2
// ======================
export function calcularDescuento(precio) {
  if (isNaN(precio)) return "Entrada no válida";
  let precioFinal = precio;
  if (precio > 1000) precioFinal = precio * 0.80;
  else if (precio >= 500 && precio <= 1000) precioFinal = precio * 0.90;
  return `Precio final: $${precioFinal}`;
}

// ======================
// EJERCICIO 3
// ======================
export function categoriaIMC(imc) {
  if (isNaN(imc)) return "Entrada no válida";
  if (imc < 18.5) return "Bajo peso";
  if (imc <= 24.9) return "Normal";
  if (imc <= 29.9) return "Sobrepeso";
  return "Obesidad";
}

// ======================
// EJERCICIO 4
// ======================
export function nivelRiesgo(edad, enfermedades) {
  if (isNaN(edad)) return "Entrada no válida";
  if (edad >= 40 && edad <= 60 && enfermedades) return "Riesgo moderado";
  if (edad > 60 || enfermedades) return "Alto riesgo";
  return "Bajo riesgo";
}

// ======================
// EJERCICIO 5
// ======================
export function esBisiesto(anio) {
  if (isNaN(anio)) return "Entrada no válida";
  return ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0))
    ? "Es bisiesto"
    : "No es bisiesto";
}

// ======================
// EJERCICIO 6
// ======================
export function esElegibleParaPrestamo(salario, puntajeCredito) {
  if (isNaN(salario) || isNaN(puntajeCredito)) return "Entrada no válida";
  return (salario > 3000000 && puntajeCredito > 650)
    ? "Elegible para préstamo"
    : "No elegible para préstamo";
}

// ======================
// EJERCICIO 7 (JSON con import assertion)
// ======================
import libros from './libros.json' with { type: 'json' };

export function consultarLibrosPorPalabraClaveTitulo(palabra) {
  if (!palabra || palabra.trim() === "") return [];
  return libros.filter(libro =>
    libro.titulo.toLowerCase().includes(palabra.toLowerCase())
  );
}

export function consultarLibrosPaginas() {
  return libros.map(libro => ({ titulo: libro.titulo, paginas: libro.paginas }));
}

// ======================
// EJERCICIO 8: Clase Alcancia
// ======================
export class Alcancia {
  constructor() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }

  agregarMoneda(valor) {
    if (valor === 200) this.monedas200++;
    else if (valor === 500) this.monedas500++;
    else if (valor === 1000) this.monedas1000++;
    else return "Denominación no válida";
  }

  contarMonedas() {
    return {
      monedas200: this.monedas200,
      monedas500: this.monedas500,
      monedas1000: this.monedas1000
    };
  }

  calcularTotal() {
    return (this.monedas200 * 200) +
           (this.monedas500 * 500) +
           (this.monedas1000 * 1000);
  }

  romperAlcancia() {
    const total = this.calcularTotal();
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
    return total;
  }

  nuevaAlcancia() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }
}

// ======================
// EJERCICIO 9: Clase Contacto
// ======================
export class Contacto {
  constructor(id, nombre, apellido, correo, celular) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.celular = celular;
  }
}
