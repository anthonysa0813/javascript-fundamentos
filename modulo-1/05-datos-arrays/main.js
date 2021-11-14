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

// console.log(products.nombreEmpresa);
console.log(products["nombreEmpresa"]);

console.log(alumnos[2]); //luhana
// metodos de arrays

// iteración de arrays

// map =  devuelve un array nuevo
const bienvenida = alumnos.map(
  (alumno) => `Bienvenido al curso Javacript - ${alumno}`
);

console.log(bienvenida);

// find
const buscar_valor = alumnos.find((alumno) => alumno === "luhana");
console.log(`Se encontro el valor y es: ${buscar_valor}`);

// filter
const buscar_productos = products.data.filter(
  (product) => product.precio > 1500
);
console.log(buscar_productos);

// reduce

// forEach
