// codigo que importa 
import defecto, { magicNumber, hello, bye } from "./constants.js";

import PromptSync from "prompt-sync";

import persona from "./persona.js"
// no swe colocan {}

console.log(magicNumber)

console.log  (hello())
console.log  (bye())

//import * as modile from "./constants.js"
//import {ceil} from "";

console.log(defecto)

let per = new persona("cesar", "cuella@sena.edu.co");

per.saludar()

console.log(per.getcorreo)

export default "SENA REGIONAL CAUCA "


