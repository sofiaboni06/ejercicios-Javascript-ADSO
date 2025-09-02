const magicNumber = 42 
//export let number = 42;
//export const hello = () => "hello";
//export class codeblock {};
let number = 42 
const hello =() => "hello"
const goodbye = () => "bye"; 
class codeblock {};

//export {number}// una en una exportacion
//export {hello,goodbye as bye} // varias en una exportacion
export {magicNumber, hello, goodbye as bye, codeblock} // varias en una exportacion

export default "SENA REGIONAL CAUCA "
// SOLO PUEDO TENER UN DEFAULT POR ARCHIVO