//los objetos pueden tener funciones como metodos que usan thiss para referirse a las propiedades del objeto
//metodos comunes de los objetos

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encender: function() {
        return "El coche " + this.marca + " esta encendido." ;
    }
};

console.log(coche.encender()); // Llama al método y muestra el resultado


////////////////////////////////////////////////////////////////////////////
let carro = {
    placa: "ABC123",
    color: "Rojo",
    marca: "Toyota",
    encender: function() {
        return `El carro ${this.placa} de color ${this.color} está encendido.`;
    }
}

console.log(carro.encender()); // Llama al método y muestra el resultado


////////////////////////////////////////////////////////////////////////////
 let cuenta ={
    titular: "Ana",
    saldo: 1500,
    mostrarSaldo: function() {
        return `El saldo de la cuenta de ${this.titular} es: $${this.saldo}`;
 }
 }

 console.log(cuenta.mostrarSaldo()); // Llama al método y muestra el resultado
 console.saldo -= 1000000
 console.log(cuenta.mostrarSaldo()); // Muestra el saldo actualizado 