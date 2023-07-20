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
// type Hero = {
//   readonly id?: number
//   name: string;
//   age: number;
//   isActive?: boolean;
// };

// readonly esta propiedad de typescript para los tipos es para indicar que esta propiedad es solo de lectura, y que por tanto no se puede mutar, ojo esto solo funciona aqui en desarrollo pero si luego hacemos build para despues subir nuestro proyecto esto se lo pasara y no habra ningun problema. OJO CON ESO!

// const hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age, isActive: true };
// }

// const thor = createHero({ name: "thor", age: 1200 });
// console.log(thor.isActive) // --> true.

// thor.id?.toLocaleString() // Esto se ejecutara solo si tengo un id

// * Templantes Union Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`; // <-- Esto no solo se aplica a los objetos sino que tambien se aplica a cadenas de texto.

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
// };

// const hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({ name: "thor", age: 1200 });
// console.log(thor.isActive); // --> true.

// thor.id?.toLocaleString();

// thor.id ?? 'No tiene id' // <-- Significa que si no tiene id le dara como valor por defecto el string de la derecha.

// // * Ejemplo con colores.
// type Hexagesimal = `#${string}`

// // let color1: Hexagesimal = '0022ff' <-- Este no es valido ya que no tiene el --> "#".
// let color2: Hexagesimal = '#0022ff'

// * Union types:
// type HeroScalePower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// // Ejemplo:
// let example: HeroScalePower = 'planetary' // <-- Aqui solamente podemos usar las escalas que hemos indicado en HeroScalePower.
// // Ejemplo 2:
// let example2: number | string
// example2 = 5
// example2 = 'hasdu'
// // example2 = true <-- Esto esta mal porque la variable solo espera dos tipos, o number o string.

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   scalePower?: HeroScalePower
// };

// const hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age, scalePower } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//     scalePower,
//   };
// }

// const thor = createHero({ name: "thor", age: 1200 });
// // const thor = createHero({ name: "thor", age: 1200, scalePower: 'local' });
// console.log(thor.isActive); // --> true.

// thor.id?.toLocaleString();

// thor.scalePower = 'local'
// thor.scalePower = 'localasd' <-- Esto esta mal ya que las opciones son las que le indicamos al tipo.

// * Intersection Types:
// type HeroScalePower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// }

// type HeroProperties = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   scalePower?: HeroScalePower
// };

// // * Example.
// type Hero = HeroBasicInfo & HeroProperties; // Aqui lo que estoy haciendo es uniendo dos tipos diferentes para hacer un tipo nuevo con las cualidades de los dos.

// const hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age, scalePower } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//     scalePower,
//   };
// }

// const thor = createHero({ name: "thor", age: 1200 });

// console.log(thor.isActive);

// thor.id?.toLocaleString();

// thor.scalePower = 'local'

// * Type Indexing
// type HeroProperties = {
//   isActive?: boolean
//   address: {
//     planet: string
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   city: 'New York',
//   planet: 'Planeta Tierra'
// } // <-- De esta manera se puede reutilizar un tipo para otras utilidades.

// * Type From Value, Example:

// const address = {
//   planet: 'earth',
//   city: 'new york'
// }

// type Address = typeof address // El typeof aqui tiene mas utilidades que el de solo dar el tipo de las propiedades y variables. Aqui estamos sacando por los tipos de address un nuevo tipo a base de los tipos de un objeto con typeof.

// const addressTwitch: Address = {
//   planet: 'Mars',
//   city: 'Twitch'
// }

// Type from function return 

function createAddress() {
  return {
    planet: 'mars',
    city: 'twitch'
  }
}

type Address = ReturnType<typeof createAddress> // <-- Esto va a darme el tipo de lo que returna esta funcion creadora de objetos. Asi sacamos los tipos de una funcion.

const locations: Address = {
  city: 'new york',
  planet: 'mars'
}

