const title = document.querySelector(".title");

// title.addEventListener(eventName, eventHandler)

title.addEventListener("click", (e) => {
  console.log(e);
});

/* eventos de mouse
- click
- dblclick
- mouseover
- mouseenter


*/

/* eventos de inputs
- copy
- paste
- blur
- input

*/

/* como obtener información de un input */

const inputSearch = document.querySelector(".buscador");

inputSearch.addEventListener("input", (e) => {
  console.log(e.target.value);
});

/* evento submit en formulario */
