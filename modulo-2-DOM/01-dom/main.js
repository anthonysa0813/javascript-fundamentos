/*1) Acceder a elementos del html con document */

let elemento;

elemento = document.head;
elemento = document.body;
// elemento = document.links;
// elemento = document.images;

console.log(elemento);

//2) getElementById
const title = document.getElementById("title");

title.classList.add("title-content");
// console.log(title);

//3) querySelector && querySelectorAll

/* 
*****************MODIFICANDO TEXTO************
4.1) <elemento_name>.innerText => es idéntico a textContent solo que si existe un visibility:hidden no lo va a reconocer.
4.2) <elemento_name>.textContent
4.3) <elemento_name>.innerHTML => reconoce el texto y si hay etiquetas de html también lo reconocerá.


*/
const titlePrueba = document.querySelector(".prueba-text");

// titlePrueba.textContent = "i'm a developer ";

/* 

**************** Controlando el css desde JS********


*/

// titlePrueba.style.backgroundColor = "red";
titlePrueba.classList.add("nueva-clase");
/* classList(add, remove, toggle) */

console.log(titlePrueba);

/* navegar de forma de padre => hijos */

const nav = document.querySelector(".navegation");

console.log(nav.children[2]);

/* navegar de hijo a padre */

// console.log(nav.parentElement);

/* navegación entre hermanos */
console.log(nav.children[0].nextElementSibling);

console.log(nav.children[1].previousElementSibling);

/* creando elementos de html con js*/
const enlace = document.createElement("a");
enlace.textContent = "acerca de mí";
enlace.href = "https://www.google.com";
enlace.target = "_blank";
console.log(enlace);

const menu = document.querySelector(".menu");

menu.appendChild(enlace);

const footer = document.querySelector(".footer");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    button.classList.remove("button-close");
  } else {
    footer.classList.add("activo");
    button.textContent = "Cerrar";
    button.classList.add("button-close");
  }
  console.log(footer.classList);
});
