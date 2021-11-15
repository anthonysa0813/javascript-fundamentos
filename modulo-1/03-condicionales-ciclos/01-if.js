const persona = "anthony"; // false
const edad = 18;
// console.log(persona.length); // cuenta los caracteres de dicho valor de la variable

const persona2 = ["a", "n", "t", "h"];
// console.log(persona2[1]); //n
// console.log(persona.split("")[0]); //a
/* slice */
// console.log(persona.slice(0, 4)); // anth

if (edad < 18) {
  console.log("No puedes ingresar!");
} else if (edad === "18") {
  console.log("Si, puedes pero por poco tiempo");
} else {
  console.log("Ingresaaaaa");
}

// doble == VS triple ===

// ternarios

// anthony == true ?? false
const mensaje = persona ? "Bienvenido anthony" : "No puedes ingresar anthony";

console.log(mensaje);

// persona = "tony";
{
  // const persona = "pepe";
  let presidente = "Bush";
  console.log(presidente);
}

// console.log(persona);
// console.log(presidente);
