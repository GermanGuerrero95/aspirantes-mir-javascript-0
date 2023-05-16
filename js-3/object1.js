const pedro = {
  nombre: "Pedroz Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

//2.Imprime en la consola el valor de la llave edad.
console.log(pedro.edad);
//3.Agregar una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
//4.Elimina la propiedad con llave activo.
delete pedro.activo;
//5.Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :)
for (let [llave, valor] of Object.entries(pedro)) {
  console.log(`${llave}: ${valor}`);
}
//6.(ADJUNTO 2 RESPUESTAS)Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.

//Esta función agrega la función de  saluda.
function addSalute(obj) {
  obj.saluda = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
  obj.saluda();
}

//7.Llamo la función de saluda
addSalute(pedro);

//Sí agrego manualmente
// const pedro = {
//   nombre: "Pedro Perez",
//   edad: 30,
//   activo: true,
//   hobbies: ["programar", "squash", "piano"],
//   saludar: function () {
//     return `Hola me llamo ${this.nombre}`;
//   },
// };
//7. Acá lo llamo nuevamente
// console.log(pedro.saludar());
