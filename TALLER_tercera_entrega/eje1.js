const creador = {
  letrasMayus: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  letrasMinus: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numeros: ["0","1","2","3","4","5","6","7","8","9"],
  caracteres: ["@","#","$","%","&","(",")","=","?","¿","*","+","[","]","{","}"],

  elegirAleatorio: function (categoria) {
    let conjunto = this[categoria];
    let indice = Math.floor(Math.random() * conjunto.length);
    return conjunto[indice];
  }
};

function crearClave() {
  let secciones = [];

  for (let i = 0; i < 2; i++) {
    secciones.push(creador.elegirAleatorio("letrasMayus"));
  }

  for (let i = 0; i < 2; i++) {
    secciones.push(creador.elegirAleatorio("letrasMinus"));
  }

  for (let i = 0; i < 2; i++) {
    secciones.push(creador.elegirAleatorio("numeros"));
  }

  for (let i = 0; i < 2; i++) {
    secciones.push(creador.elegirAleatorio("caracteres"));
  }
  return secciones.join("");
}

console.log(crearClave());
