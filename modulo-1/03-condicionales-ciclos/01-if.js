const persona = "anthony";
const edad = 18;
console.log(persona.length);
console.log(persona.split(""));
/* slice */
console.log(persona.slice(0, 4));

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

{
  const persona = "pepe";
  let presidente = "Bush";
  console.log(persona, presidente);
}

console.log(persona);
console.log(presidente);
