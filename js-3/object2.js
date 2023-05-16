const persona = {
  nombre: "German Guerrero",
  edad: 27,
  ciudad: "Bogotá",
  profesion: "Programador",
};

//2. Imprime en la consola el objeto "persona" completo.

console.log(persona);

/*3.Crea una función llamada "presentacion" que tome el objeto "persona" 
como argumento y devuelva una cadena de texto que incluya el nombre, 
la edad y la ciudad de la persona.*/

//4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".

function presentacion(persona) {
  let mensaje = "";
  for (let propiedad of Object.values(persona)) {
    mensaje = `Hola mucho gusto me llamo ${persona.nombre}, tengo ${persona.edad} y soy de ${persona.ciudad}`;
  }
  return mensaje;
}

//5.Imprime en la consola el valor de la variable "mensaje".
console.log(presentacion(persona));

//6.Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.

persona.hobbies = ["programar", "ver tutoriales", "jugar wow", "ver futbol"];

//7.Imprime en la consola la propiedad "hobbies" del objeto "persona"
console.log(persona.hobbies);

//8.Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.

//Primera solución que encontré
let paths = Object.values(persona.hobbies);

for (let i = 0; i < paths.length; i++) {
  let path = paths[i];
  console.log(path);
}

//Segunda solución
for (let valores of Object.values(persona.hobbies)) {
  console.log(valores);
}
