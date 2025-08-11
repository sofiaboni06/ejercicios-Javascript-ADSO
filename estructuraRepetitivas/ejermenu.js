const prompt = require('prompt-sync')();
function menu() {
    let opcion = 0
    do {
        console.clear();
        console.log("Menú de opciones:");
        console.log("1. area del circuo ");
        console.log("2. adivinar numro entre 1 y 10");
        console.log("3. salir");
        console.log("");
        opcion = parseInt(prompt("Seleccione una opción: "));
        switch (opcion) {
            case 1:
                console.log("Opción 1");
                const radio = parseFloat(prompt("Ingrese el radio del círculo: "));
                area = radio * radio * Math.PI;
                console.log("El área del círculo es: " + area);
            

                break;
            case 2:
                console.log("Opción 2: Adivina el número entre 1 y 100. Tienes 5 intentos.");
                const numeroSecreto = Math.floor(Math.random() * 100) + 1;
                let adivinado = false;
                for (let intentos = 1; intentos <= 5; intentos++) {
                    let intento = parseInt(prompt(`Intento ${intentos}: Ingresa tu número: `));
                    if (intento === numeroSecreto) {
                        console.log("¡Felicidades! Adivinaste el número secreto.");
                        adivinado = true;
                        break;
                    } else if (intento < numeroSecreto) {
                        console.log("El número secreto es mayor.");
                    } else if (intento > numeroSecreto) {
                        console.log("El número secreto es menor.");
                    }
                }
                if (!adivinado) {
                    console.log(`No adivinaste. El número secreto era: ${numeroSecreto}`);
                }
                break;
                
            case 3:
                console.log("voy a salir ");
                
                break;
        }
        prompt("Presiona Enter para continuar...");
    }while(opcion !== 3);
}

menu();