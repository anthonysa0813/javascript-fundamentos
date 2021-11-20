// getElementById
const title = document.getElementById("title");

// querySelector && querySelectorAll

const navigation = document.querySelector(".navigation");
console.log(navigation);

const detalles = document.querySelectorAll("details");
const detallesArray = [...detalles];
console.log(detallesArray);

//  background-color: red;
// title.style.backgroundColor = "red";
title.style.color = "yellow";

/* 
*********AGREGAR CLASES DESDE JS
- classList (add, remove , toggle)

*/

title.classList.add("titulo-principal");
title.classList.remove("titulo-principal");
title.classList.toggle("nueva-clase");
console.log(title);

/* creando elementos
.textContent 
.innerText
.innerHTML

*/
const header = document.querySelector("header");
const parrafo = document.createElement("p");
parrafo.textContent = "Soy un nuevo parrafo";
console.log(parrafo);
header.appendChild(parrafo);
