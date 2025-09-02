
import alcancia from "./alcancia.js";

let mialcancia;

const crearalcancia = () => {
    mialcancia = new alcancia();
};

const actualizardatosinterfaz =()=>{
    document.querySelector("#txtMonedas200").value = mialcancia.moneda200;
    document.querySelector("#txtMonedas500").value = mialcancia.moneda500;
    document.querySelector("#txtMonedas1000").value = mialcancia.moneda1000;
    document.querySelector("#txtTotalAlcancia").value = mialcancia.cantidadtotalahorrado();
}

document.getElementById("img200").addEventListener("click", function() {
    mialcancia.agregarmoneda200();
    actualizardatosinterfaz();
});
document.getElementById("img500").addEventListener("click", function() {
    mialcancia.agregarmoneda500();
    actualizardatosinterfaz();
});
document.getElementById("img1000").addEventListener("click", function() {
    mialcancia.agregarmoneda1000();
    actualizardatosinterfaz();
});

const inicializaralcancia =()=>{
    crearalcancia();
    actualizardatosinterfaz();
}

inicializaralcancia();

