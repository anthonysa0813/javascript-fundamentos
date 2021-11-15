/* 
&& (y) => necesita que todas las condiciones sean verdaderas!
|| (ó)
!= 
!==


= (asignacion de valor)
== (devuelve un boolean)
=== (devuelve un boolean)

*/
let edad = 18;

if (edad === "18") {
  console.log("heee eres mayor!");
}

if (edad != 19) {
  console.log("si es distinto!");
}

const alumno = true;
const trabajador = false;

// truthly and falsy

const pablo = ""; // verdadero

if ("alumno" && "") {
  console.log("Si es un alumno");
} else {
  console.log("buhhh no ingreso al bloque anterior");
}
