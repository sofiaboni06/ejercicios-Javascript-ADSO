import { areacirculo, areatriangulo } from "./funciones.js";

//document.querySelector("#btnCalcular").addEventListener("click", calcularArea);

function calcularArea() {
    const radio = document.querySelector("#txtRadio").value;
    const area = areacirculo(radio);
    //console.log(area);
    document.querySelector("#txtrespuesta").value = area.toFixed(3);
}

document.querySelector("#btncalculartriangulo").addEventListener("click",() => {
    const base = document.querySelector("#txtBASE").value;
    const altura = document.querySelector("#txtALTURA").value;
    const area = areatriangulo(base, altura);
    document.querySelector("#txtrespuestatriangulo").value = area.toFixed(3);
});
