// sintaxis

// parametros

// valores con retorno

// funciones anónimas

// funciones con constantes

// function <nombre>(parametros) {

// }

function suma(a, b) {
  console.log(a + b);

  return a + b;
}

const resultadoSuma = suma(21, 63);
console.log("Suma resultado: " + resultadoSuma);

// instanciar
suma(10, 43);
suma(12, 1);

const nombre = "anthony";
const anonima = function () {
  const nombre = "pepe";
  console.log("soy anonimo " + nombre);
};
anonima();
// Arrow functions
const anonima2 = () => console.log("Soy una  arrow function anonimo");

anonima2();

// scope
