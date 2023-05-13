/* Este ejercicio sí que me costo replace solo me reemplazaba 
las , del principio. Hasta que encontre replaceAll que sí quito todas las ,*/

function join(array) {
  return array.toString().replaceAll(",", " ");
}

console.log(join(["pepe", "german", 1, true]));
console.log(join(["pepe", "test", false, 2]));
console.log(
  join(["pepe", "test", false, 2, ["soy un array adentro del array", 4]])
);
/*Paso a paso*/

/*1. Volverlos string con toString(). Luego 
verifique sí en efecto el dato era string con
typeof
const array=["german", "pedro", true, 1]
console.log(typeof array.toString())
*/

/*2. Cuando hacia el console.log al
const array=["german", "pedro", true, 1] me salía--> german,pedro,true,1 
todo separado por comas, luego reemplaze las , con el
replaceAlly las cambie por un espacio */
