var alumno; // undefined
// var profesion = undefined

/* 
************TIPOS DE DATOS*************
1) Number: Para todos los tipos de números ( integers and decimals)
2) String: cadenas de texto
3) Boolean: true || false
4) Object: {}
5) undefined: variable que no tenga asignada un valor
6) Null también es una instancia a object y al mismo tiempo no cumple la condición de ser objecto
7) Symbol
8) bigint



¿Qué son los Objectos?
-Son colecciones de datos (información) que tienen un identificador y un valor

¿que son los prototipos de objetos ?
- Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí
- https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes
- Esto quiere decir que JS esta basado en prototipos y la respuesta es YES!
*/

// number

// typeof= que tipo de dato es dicha expresión
// console.log(typeof 1397); // number

// strings
// console.log(typeof "hola, cómo estás?");
// console.log(typeof "hola, cómo estás?");
// var nombre = "anthony";
// console.log(`hola, cómo estás? ${4 + 5}`);
// console.log(`hola ${nombre}`);

//variables
//1 ) var nombre_variable = 22314  => Hoisting
// 2) let nombreCambiante = "anthony" =>
// 3) const nombreNoCambia = "Alejandra" =>

let nombreCambiante = "anthony";
nombreCambiante = "Tony";
console.log(nombreCambiante);

const nombreNoCambia = "Pepe";
// nombreNoCambia = "Juan"; no es válido para js

var profesion = "Ingeniero de software";
var profesion = "Frontend developer";
console.log(profesion);
/* 
simples ''
dobles ""
back sticks ``
*/

// Booleans
console.log(typeof false);

// Object
// console.log(typeof {});
const persona = {
  nombre: "anthony",
  edad: 25,
  profesion: "frontend developer",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona["profesion"]);

//  var
// let
// const

var alumno = "pepito"; // declaracion de variables
var alumno; //asignación
//HOISTING

var alumno = {
  alumno: "hagdajdk",
  edad: 24,
};

// console.log(alumno);

// console.log(piloto);
var piloto = "juan perez";

//
let cambiaNombre = "fulano";
cambiaNombre = "Juan";
// let cambiaNombre = {};
// console.log(cambiaNombre);

const noCambian = "anthony";
// noCambian = "kajgdadjk";

//Undifined
let producto;
console.log(producto);

// Null
producto = null;
console.log(typeof producto);

// definiendo un objeto
// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

//object => Object
// const anthony = new Persona("anthony", 25);
// console.log(anthony);
