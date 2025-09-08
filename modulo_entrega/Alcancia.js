// alcancia.js
export default class Alcancia {
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
    return (this.monedas200 * 200) + (this.monedas500 * 500) + (this.monedas1000 * 1000);
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
