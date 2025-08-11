const prompt = require('prompt-sync')();
function menu() {
    let opcion = 0
    do {
        console.clear();
        console.log("Menú de opciones:");
        console.log("1. el numero ingresado por teclado es par o impar ");
        console.log("2. Sumar los dígitos de un número entero");
        console.log("3.  informe a una persona si puede votar o no puede votar");
        console.log("4. Día de la semana según número (1=Lunes, 7=Domingo)");
        console.log("5. Calcular precio de entrada para salas de juegos");
        console.log("6. El porcentaje segun el salario mensual");
        console.log("7. Imprimir múltiplos de 3 entre dos números");
        console.log("8. escribe un numero y se dira si es primo o no");
        console.log("9. las tabals de los numemros 5, 6, 7, 8, 9");
        console.log("10. Imprimir una frase varias veces");
        console.log("11. Calcular el factorial de un número");
        console.log("12. Suma de pares y promedio de impares entre dos números");
        console.log("13. Convertir un número decimal a binario");
        console.log("14. Mostrar triángulo de asteriscos creciente");
        console.log("15. Salir del programa");
        console.log("--------------------------------------------------");

        opcion = parseInt(prompt("Seleccione una opción: "));
        switch (opcion) {
            case 1:
                console.log("Opción 1 : el numero ingresado por teclado es par o impar ");
                const numeropi = parseFloat(prompt("Ingrese un numero: "));
                const esPar = (numeropi % 2) === 0;
                console.log("El número " + numeropi + " es " + (esPar ? "par" : "impar"));
                break;
            case 2:
                console.log("Opción 2: Sumar los dígitos de un número entero.");
                const numero = parseInt(prompt("Ingresa un número entero: "));
                let sumaDigitos = 0;
                let numTemp = numero;

                while (numTemp > 0) {
                    sumaDigitos += numTemp % 10;
                    numTemp = Math.floor(numTemp / 10);
                }

                console.log("La suma de los dígitos de " + numero + " es: " + sumaDigitos);
                break;
                
            case 3:
                console.log("Opción 3: informe a una persona si puede votar o no puede votar");
                const edad = parseInt(prompt("Ingrese su edad: "));
                const tieneCedula = prompt("¿Tiene cédula de identidad? (si/no): ").toLowerCase() === 'si';
                const cedulaInscrita = prompt("¿Está su cédula inscrita en el registro electoral? (si/no): ").toLowerCase() === 'si';
                if (edad >= 18 && tieneCedula && cedulaInscrita) {                   
                    console.log("Usted puede votar.");
                } else {
                    console.log("Usted no puede votar.");
                }
                
                break;
            case 4:
                console.log("Opción 4: Día de la semana según número (1=Lunes, 7=Domingo)");
                const diaNum = parseInt(prompt("Ingrese un número entre 1 y 7: "));
                let diaSemana = "";
                switch (diaNum) {
                    case 1: diaSemana = "Lunes"; break;
                    case 2: diaSemana = "Martes"; break;
                    case 3: diaSemana = "Miércoles"; break;
                    case 4: diaSemana = "Jueves"; break;
                    case 5: diaSemana = "Viernes"; break;
                    case 6: diaSemana = "Sábado"; break;
                    case 7: diaSemana = "Domingo"; break;
                    default: diaSemana = "Número fuera de rango";
                }
                console.log(diaSemana);
                break;
            case 5:
                console.log("Opción 5: Calcular precio de entrada para salas de juegos");
                let continuar;
                do {
                    const edadCliente = parseInt(prompt("Ingrese la edad del cliente (o -1 para salir): "));
                    if (edadCliente === -1) {
                        continuar = false;
                    } else if (edadCliente < 5) {
                        console.log("Entrada gratis.");
                        continuar = true;
                    } else if (edadCliente <= 18) {
                        console.log("Debe pagar 5 mil pesos.");
                        continuar = true;
                    } else {
                        console.log("Debe pagar 10 mil pesos.");
                        continuar = true;
                    }
                } while (continuar);
                break;
            case 6:
                console.log("Opción 6: Calcular impuesto sobre salario mensual");
                let seguir = true;
                while (seguir) {
                    const salario = parseFloat(prompt("Ingrese su salario mensual (o un valor negativo para salir): "));
                    if (salario < 0) {
                        seguir = false;
                    } else {
                        let tasa = 0;
                        if (salario < 1000000) {
                            tasa = 0.01;
                        } else if (salario < 2000000) {
                            tasa = 0.03;
                        } else if (salario < 4000000) {
                            tasa = 0.05;
                        } else if (salario < 10000000) {
                            tasa = 0.07;
                        } else {
                            tasa = 0.10;
                        }
                        const impuesto = salario * tasa;
                        console.log("Debe pagar $" + impuesto.toFixed(2) + " de impuesto (" + (tasa * 100) + "%)");
                    }
                }
                break;
            case 7:
                console.log("Opción 7: Imprimir múltiplos de 3 entre dos números");
                const inicio = parseInt(prompt("Ingrese el primer número: "));
                const fin = parseInt(prompt("Ingrese el segundo número: "));
                console.log("Múltiplos de 3 entre " + inicio + " y " + fin + ":");
                for (let i = inicio; i <= fin; i++) {
                    if (i % 3 === 0) {
                        console.log(i);
                    }
                }
                break;
            case 8:
                console.log("Opción 8: Escribe un número y se dirá si es primo o no");
                const numPrimo = parseInt(prompt("Ingrese un número entero: "));
                let esPrimo = true;
                if (numPrimo <= 1) {
                    esPrimo = false;
                } else {
                    for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
                        if (numPrimo % i === 0) {
                            esPrimo = false;
                            break;
                        }
                    }
                }
                console.log("El número " + numPrimo + (esPrimo ? " es primo." : " no es primo."));
                break;
            case 9:
                console.log("Opción 9: Tablas de multiplicar del 5, 6, 7, 8 y 9");
                for (let tabla = 5; tabla <= 9; tabla++) {
                    console.log(`Tabla del ${tabla}:`);
                    for (let i = 1; i <= 10; i++) {
                        console.log(`${tabla} x ${i} = ${tabla * i}`);
                    }
                    console.log(""); // Espacio entre tablas
                }
                break;
            case 10:
                //  repeat (bucle for)
                // Se usa para imprimir la frase la cantidad de veces indicada por el usuario
                console.log("Opción 10: Imprimir una frase varias veces");
                const veces = parseInt(prompt("Ingrese un número entero entre 1 y 20: "));
                const frase = prompt("Ingrese una frase: ");
                if (veces >= 1 && veces <= 20) {
                    for (let i = 0; i < veces; i++) {
                        console.log(frase);
                    }
                } else {
                    console.log("El número debe estar entre 1 y 20.");
                }
                break;
            case 11:
                console.log("Opción 11: Calcular el factorial de un número");
                const numFact = parseInt(prompt("Ingrese un número entero positivo: "));
                if (numFact < 0) {
                    console.log("El número debe ser positivo.");
                } else {
                    let factorial = 1;
                    for (let i = 1; i <= numFact; i++) {
                        factorial *= i;
                    }
                    console.log(`El factorial de ${numFact} es: ${factorial}`);
                }
                break;
            case 12:
                console.log("Opción 12: Suma de pares y promedio de impares entre dos números");
                const n1 = parseInt(prompt("Ingrese el primer número entero: "));
                const n2 = parseInt(prompt("Ingrese el segundo número entero: "));
                let sumaPares = 0;
                let sumaImpares = 0;
                let contadorImpares = 0;
                const inicioo = Math.min(n1, n2);
                const finn = Math.max(n1, n2);
                for (let i = inicio; i <= fin; i++) {
                    if (i % 2 === 0) {
                        sumaPares += i;
                    } else {
                        sumaImpares += i;
                        contadorImpares++;
                    }
                }
                console.log("La suma de los números pares es: " + sumaPares);
                if (contadorImpares > 0) {
                    const promedioImpares = sumaImpares / contadorImpares;
                    console.log("El promedio de los números impares es: " + promedioImpares);
                } else {
                    console.log("No hay números impares en el rango.");
                }
                break;
            case 13:
                console.log("Opción 13: Convertir un número decimal a binario");
                const decimal = parseInt(prompt("Ingrese un número decimal: "));
                if (isNaN(decimal)) {
                    console.log("Por favor ingrese un número válido.");
                } else {
                    const binario = decimal.toString(2);
                    console.log(`El número decimal ${decimal} en binario es: ${binario}`);
                }
                break;
            case 14:
                console.log("Opción 14: Mostrar triángulo de asteriscos creciente");
                
                for (let fila = 1; fila <= 6; fila++) {
                    let linea = "";
                    for (let col = 1; col <= fila; col++) {
                        linea += "* ";
                    }
                    console.log(linea.trim());
                }
                break;
            case 15:
                console.log("Saliendo del programa...");
                break;
        }
        prompt("Presiona Enter para continuar...");
    }while(opcion !== 15);
}

menu();