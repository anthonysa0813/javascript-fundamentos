/* 
Ejercicio:
- Pide al usuario el nombre y edad, y dependiendo a esos datos realiza
las siguientes conclusiones:
1) Si es mayor de edad, debes de retonar un mensaje satisfactorio con algun mensaje
con su nombre que ha escrito en el input (prompt).
2) Realiza la misma funcionalidad para el caso contrario, si es menor de edad.


NOTA:
- para capturar información, investigar sobre un método llamado
"prompt"
*/

const nombre = prompt("Hola! dime tu nombre: ");
const edad = prompt("ahora, dime tu edad: ");

// if (edad >= 18) {
//   alert(`Bienvenido ${nombre}, disfruta tu visita :)`);
// } else {
//   alert(`hey! ${nombre}, no puedes ingresar hasta que cumplas 18 :)`);
// }

/* con ecmaScript (ternarios) */
edad >= 18
  ? alert(`Bienvenido ${nombre}, disfruta tu visita :)`)
  : alert(`hey! ${nombre}, no puedes ingresar hasta que cumplas 18 :)`);
