/* promesas
El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

*/

/* objectos como tipo de datos
   Objectos prototipal = POO
*/
const fecha = new Date();
console.log(fecha);

const printDate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nuevaFecha = new Date();
      // resolve(nuevaFecha);
      reject("algo fallo");
    }, 5000);
  });
};

printDate()
  .then((fecha) => console.log(fecha))
  .catch((err) => console.log(err));
