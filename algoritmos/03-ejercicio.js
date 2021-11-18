/* 
Calculadora
- Realizar una calculadora, mediante un método prompt preguntar 
al usuario que operación deseria realizar, entre las opciones debería de ver:
1) suma
2) resta
3) multiplicacion
4) division
5encia) pot
6) raiz cuadrada
- Debes de devolver la información mediante un evento de "alert()"
*/

const operations = [
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "potencia",
  "raiz",
];

alert(`
  Bienvenido a la calculadora web!
  - suma
  - resta
  - multiplicacion
  - division
  - potencia
  - raiz cuadrada
`);
const operation = prompt("Cual es tu operacion? ");
const number1 = prompt("Escribe el primer número: ");
const number2 = prompt("Escribe el segundo número: ");

if (operation) {
  switch (operation) {
    case "suma":
      const sumaOperation = parseInt(number1) + parseInt(number2);
      alert(`Resultado: ${sumaOperation}`);
      break;
    case "resta":
      const restaOperation = parseInt(number1) - parseInt(number2);
      alert(`Resultado: ${restaOperation}`);
      break;
    case "multiplicacion":
      const multiplyOperation = parseInt(number1) * parseInt(number2);
      alert(`Resultado: ${multiplyOperation}`);
      break;
    case "division":
      const divisionOperation = parseInt(number1) / parseInt(number2);
      alert(`Resultado: ${divisionOperation}`);

      break;
    case "potencia":
      const resultado = parseInt(number1) ** parseInt(number2);
      alert(`Resultado: ${resultado}`);
      break;

    case "raiz":
      const calculo1 = parseInt(number1) ** 0.5;
      const calculo2 = parseInt(number2) ** 0.5;

      alert(`raiz cuadrada para ${number1} es ${calculo1},
raiz cuadrada para ${number2} es ${calculo2}
      `);

      break;

    default:
      alert("Escoge una opción válida!");
      break;
  }
}
