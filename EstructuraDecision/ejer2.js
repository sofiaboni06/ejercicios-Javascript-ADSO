const prompt = require('prompt-sync')();
const numero1 = parseInt(prompt("Escribe un número: "));

if (
    (numero1)) {
  console.log("No ingresaste un número válido.");
} else {
  const cifras = Math.abs(numero1).toString().length;
  // este es || o, este es && y
  // este es ! negación
  if ((numero1 >= 0 && numero1 <= 99 ) || (numero1 >= -99 && numero1 <= -10 ))  {
    console.log(`El número ${numero1} es negativo y tiene ${cifras} cifra(s).`);
  } else {
    console.log(`El número ${numero1} tiene ${cifras} cifra(s).`);
  }
}


