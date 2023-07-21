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
type Hero = {
  name: string;
  age: number;
};

const hero: Hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const thor = createHero({ name: "thor", age: 1200 });