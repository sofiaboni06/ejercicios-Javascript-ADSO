const listaPrecios = new Map();
const registroCompras = [];
const productosRegistrados = new Set();

function registrarProducto(producto, valor) {
    listaPrecios.set(producto, valor);
    registroCompras.push(producto);
    productosRegistrados.add(producto);
}

registrarProducto("arroz", 3500);
registrarProducto("leche", 2430);
registrarProducto("arroz", 3500);
registrarProducto("huevo", 18000);

console.log("Productos únicos:", productosRegistrados);
console.log("Lista de precios:", listaPrecios);
console.log("Historial de compras:", registroCompras);
