// ¿qué es un callback?
// Es una función que le pasamos como parametro a otra función

// ejemplo de callback

const suma = (num1, num2) => {
  return num1 + num2;
};

const printCalc = (num1, num2, callback) => {
  const resultado = callback(num1, num2);
  console.log(resultado);
};

// printCalc(10, 20, suma);

// memory head

console.log("soy primero!!");

console.log("Soy segundo");

setTimeout(() => {
  console.log("Soy tercero");
}, 3000);

console.log("Soy cuarto");
