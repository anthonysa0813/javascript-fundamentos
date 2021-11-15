// sintaxis
// función es un bloque de código con nombre que realiza una operación

// he creado mi función
function sayMyName(nombre) {
  console.log(`Hello ${nombre}`);
}

// instanciar = a darle mi vida a mi function
sayMyName("Alejandra");
sayMyName("Pepe");

// parametros

// valores con retorno

// funciones anónimas

// funciones con constantes

// function <nombre>(parametros) {

// }

function suma(a, b) {
  console.log(a + b); // solo imprimelo en la consola

  return a + b; // devuelve el valor a + b
}

const resultadoSuma = suma(21, 63);
console.log("Suma resultado: " + resultadoSuma);

// instanciar
suma(10, 43);
// suma(12, 1);

const nombre = "anthony";
const anonima = function () {
  const nombre = "pepe";
  console.log("soy anonimo " + nombre);
};
anonima();

// Arrow functions

// const suma2 = (a, b) => {
//   return a + b;
// };
const suma2 = (a, b) => a + b;

const resultadoSuma2 = suma2(100, 100);
console.log(resultadoSuma2);
// const anonima2 = () => console.log("Soy una  arrow function anonimo");

// anonima2();

// scope
