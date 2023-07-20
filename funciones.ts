// funciones con typescript.

// Funciones con parametros normales
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("pepe");
// saludar(5) <-- Esto esta mal X

// Funciones con objetos como parametros.
function saludar2({ name, age }) {
  console.log(`Hola ${name} tienes ${age} años.`);
}

saludar2({ name: "robert", age: 3 });
saludar2({ name: 10, age: 3 });

// ? Primera forma de tipar un objeto que se pasa como parametro:
function saludar3({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años.`);
}

saludar3({ name: "robert", age: 3 });
// saludar3({ name: 10, age: 3 }); <-- Esto esta mal X

// ? Segunda forma de tipar un objeto que se pasa como parametro:
function saludar4(persona: { name: string; age: number }) {
  const {name, age} = persona
  console.log(`Hola ${name}, tienes ${age} años.`);
}

saludar4({ name: "robert", age: 3 });
// saludar4({ name: 10, age: 3 }); <-- Esto esta mal X

// Tipando lo que devuelve la funcion.
// Para tipar lo que devuelve una funcion lo que hacemos es tipar la funcion directamente para indicar el tipo de dato que devolvera.
function saludar5(persona: { name: string; age: number }): number {
  const {name, age} = persona
  console.log(`Hola ${name}, tienes ${age} años.`);
  return age
}

// let username: string
// username = saludar5({ name: "robert", age: 3 }); <-- Esto no se puede X

// pasando funciones como parametros.
// ? Primera forma de tipar resibiendo una callback:
// const sayHiFromFunction = (fn: Function) => {
//   fn('Miguel')
// }

// sayHiFromFunction((name: string) => {
//   console.log(`Hola ${name}`)
// })
// Esta forma aunque es valido no es recomentado hacerlo.

// ? Segunda forma:
// * Forma correcta!
// TODO NOTA: Aqui lo que le indico es que esta funcion recibira una funcion como parametro y que la funcion que recibira tiene como parametro un tipo string y que lo que devulve solo es escucha, OJO si queremos que devuelva el callback algo debemos tiparlo de la siguiente manera; fn: (name: string) => string <-- Esto indica que lo que retorna es un string.
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('Miguel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Ejemplo si devolviera algo:
// const sayHiFromFunction = (fn: (name: string) => string) => {
//   fn('Miguel')
// }

// const sayHi = (name: string) => {
//   console.log(`Hola ${name}`)
//   return name
// }

// sayHiFromFunction(sayHi)

// Formas de tipar una arrow function:
// ? Primera forma de tipar una arrow function.
const resta1 = (a: number, b: number): number => {
  return a - b
}

// ? Segunda forma para tipar una arrwo funcion, esta forma de tipar es un poco confusa ya que primero tipamos los parametros y luego lo que devulve.
const resta2: (a: number, b: number) => number = (a, b) => {
  return a - b
}

// never, esta se utiliza para funciones que sabemos que no devolveran nada.
// Ejemplo:
const throwError = (message: string): never => {
  throw new Error(message)
}

// TODO NOTA: Las funciones normalmente no tiene inferencia de tipos, solo en casos concretos, y depende en el contexto que se usa, ejemplo:
const avengers = ['spiderman', 'superman', 'hulk']

avengers.forEach(heroes => {
  console.log(heroes.toLocaleLowerCase()) // <-- Esto si puede inferirlo y sabe que lo que estamos recorriendo con el forEach es un arreglo de string y por eso depende en el contexto de como lo usamos la funcion, esto tambien funcionaria con funciones normales.
})

// avengers.forEach(function(heroes) {
//   console.log(heroes.toLocaleLowerCase())
// })