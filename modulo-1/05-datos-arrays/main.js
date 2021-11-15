// sintaxis de arrays
const alumnos = ["anthony", "jorge", "luhana", "alejandra", "luhana", "luhana"];
const products = {
  nombreEmpresa: "Linio",
  data: [
    {
      nombre: "Laptop Lenovo Legion",
      precio: 1590,
    },
    {
      nombre: "Hp gamer",
      precio: 2000,
    },
    {
      nombre: "Tv Lg",
      precio: 1000,
    },
    {
      nombre: "Mochila Porta",
      precio: 100,
    },
    {
      nombre: "Iphone 12 Max Pro",
      precio: 2000,
    },
  ],
};

// asignación de punto
console.log(products.data);
// console.log(products["nombreEmpresa"]);

// console.log(alumnos[2]); //luhana
// metodos de arrays

// iteración de arrays

// map =  devuelve un array nuevo
const mensajeDeBienvenida = alumnos.map((alumno) => {
  return `Bienvenido al curso de javascript para reactjs - ${alumno}`;
});

console.log(mensajeDeBienvenida);

// find => encuentra y devuelve la primera que cumpla
const buscar_valor = alumnos.find((alumno) => alumno === "luhana");
const buscarProduct = products.data.find((p) => p.precio === 2000);
console.log(buscarProduct);
console.log(`Se encontro el valor y es: ${buscar_valor}`);

// filter
const buscar_productos = products.data.filter(
  (product) => product.precio > 1500
);
console.log(buscar_productos);

// reduce

// forEach
