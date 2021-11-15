//suma
let suma = 10 + 112; // 122
suma = suma + 10; // 132
suma += 10; // 142
//resta
let resta = 100 - 32;
resta = resta - 50;
resta -= 50;
// multiplicación
let multiplicacion = 10 * 2;
// multiplicacion = multiplicacion * 4
multiplicacion *= 4;

// división
let división = 100 / 25;
// módulo
let modulo = 13 % 4; //1

// potencia (se lee: 10 al cuadrado)
let potencia = 10 ** 2;

// Math

console.log({
  sumaTotal: suma,
  restaTotal: resta,
  multiplicacion: multiplicacion,
});

// console.log(suma);

const PI = Math.PI;
console.log(PI);
const randomNumber = Math.random(); //numero aleatorio entre 0 y 1
console.log(randomNumber * 10);
