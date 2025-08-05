const prompt = require('prompt-sync')();

function calcularTotal() {
  const precio = parseFloat(prompt('Ingrese el precio: '));
  const iva = parseFloat(prompt('Ingrese el IVA (%): '));

  if (isNaN(precio) || isNaN(iva)) {
    console.log('Por favor, ingresa valores válidos.');
    return;
  }

 
  const total = precio + (precio * iva / 100);
  console.log(`Usted ha realizado una compra. El precio total a pagar es: $${total.toFixed(2)}`);
}

calcularTotal();
