/* 
Ejercicio 1:
- Crea una función que itere cada alumno de tu array (lista) llamada "alumnos" y enviale un
mensaje dinámico, puede ser un saludo u cualquier otra funcionalidad.
- Crea un función que envie a tus alumnos los cursos a los que pertenece.


*/

const alumnos = [
  {
    nombre: "Pepe",
    apellidos: "Ramirez",
    nota: 5,
    cursos: ["Python", "Javascript", "Ruby", "Postgress"],
  },
  {
    nombre: "Juan",
    apellidos: "Sanchez",
    nota: 8,
    cursos: ["Python", "Java", "PHP"],
  },
  {
    nombre: "Alejandra",
    apellidos: "Hernandez",
    nota: 6,
    cursos: ["Ruby", "Javascript", "CSS", "HTML"],
  },
  {
    nombre: "Andrea",
    apellidos: "Alvarez",
    nota: 4,
    cursos: ["Python", "SQL", "MongoDb", "Machine Learning"],
  },
  {
    nombre: "Alonso",
    apellidos: "Alvarada",
    nota: 5,
    cursos: ["C++", "Java", "Ruby"],
  },
];

/* Esta función solo pasa por cada alumno y le envia un saludo! */
const saludoFunct = () => {
  alumnos.forEach((alumn) => {
    console.log(`Hi ${alumn.nombre}, welcome to this course! :)`);
  });
};

// saludoFunct();

/* Esta función solo itera por cada alumno y les menciona sus cursos!  */
const courseByAlumn = (data) => {
  data.forEach((alumn) => {
    console.log(`Hey ${alumn.nombre}, your course are:  ${alumn.cursos}`);
  });
};

// courseByAlumn(alumnos);
/* aquí, la función pide el nombre del alumno para hacer una busqueda entre la data(alumnos) y le envia un saludo solo a esa persona. */
const courseFilterByAlumn = (name, data) => {
  const alumnSearch = data.filter((alumn) => alumn.nombre === name);
  const alumnResponse = alumnSearch[0];
  console.log(
    `hey! ${alumnResponse.nombre} your course are: ${alumnResponse.cursos}`
  );
};

courseFilterByAlumn("Alonso", alumnos);

/* 
Observaciones: 
- tratar de utilizar los métodos iterativos de los arrays
- usar back sticks 
*/
