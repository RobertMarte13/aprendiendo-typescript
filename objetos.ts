// * Los objetos tienen inferencias de datos.
// const hero = {
//     name: 'superman',
//     age: 1500
// }

// hero.name = 1203 <-- Esto no se puede X
// Si queremos agregar una nueva propiedad al objeto no podremos tampoco ya que los unicos que especificamos fue dos propiedades.
// hero.power = 1200 <-- Esto no se puede si no lo especificamos.

// Que pasa si queremos hacer una funcion creadora de heroes que se paresca a la que isimos por defecto arriba?
// Pues que aparentemente son iguales pero no es el tipo hero que es lo que queremos.
// const hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age: number) {
//     return {name, age}
// }

// const thor = createHero('thor', 1200)

// * Type alias:
// type Hero = {
//     name: string
//     age: number
// }

// const hero: Hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age: number): Hero {
//     return {name, age}
// }

// const thor = createHero('thor', 1200)
// Ahora tanto el objeto que ise manualmente y el que devuelve la funcion que crea objetos de heroes son de un unico tipo que es el de Hero.

// Una forma muy potente que tienen los tipos custom es que podemos usar la siguiente sintaxis para sacar los parametros:
// type Hero = {
//   name: string;
//   age: number;
// };

// const hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age };
// }

// const thor = createHero({ name: "thor", age: 1200 });

// * Optional properties
// NOTA Para poder hacer una propiedad de un tipo que sea opcional lo que debemos hacer es que este en los tipos lleve de ultimo el signo de interrogacion, ejemplo isActive?: boolean.
type Hero = {
  readonly id?: number
  name: string;
  age: number;
  isActive?: boolean;
};

// readonly esta propiedad de typescript para los tipos es para indicar que esta propiedad es solo de lectura, y que por tanto no se puede mutar, ojo esto solo funciona aqui en desarrollo pero si luego hacemos build para despues subir nuestro proyecto esto se lo pasara y no habra ningun problema. OJO CON ESO!

const hero: Hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

const thor = createHero({ name: "thor", age: 1200 });
console.log(thor.isActive) // --> true.

thor.id?.toLocaleString() // Esto se ejecutara solo si tengo un id