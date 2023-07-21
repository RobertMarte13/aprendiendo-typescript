// * Optional properties

type HeroId = `${string}-${string}-${string}-${string}-${string}`; // <-- Esto no solo se aplica a los objetos sino que tambien se aplica a cadenas de texto.

// NOTA Para poder hacer una propiedad de un tipo que sea opcional lo que debemos hacer es que este en los tipos lleve de ultimo el signo de interrogacion, ejemplo isActive?: boolean.
type HeroBasicInfo = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};

// readonly esta propiedad de typescript para los tipos es para indicar que esta propiedad es solo de lectura, y que por tanto no se puede mutar, ojo esto solo funciona aqui en desarrollo pero si luego hacemos build para despues subir nuestro proyecto esto se lo pasara y no habra ningun problema. OJO CON ESO!

const hero2: HeroBasicInfo = {
  name: "thor",
  age: 1500,
};

function createHero2(hero2: HeroBasicInfo): HeroBasicInfo {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

const thor2 = createHero({ name: "thor", age: 1200 });
// console.log(thor.isActive) // --> true.

// thor.id?.toLocaleString() // Esto se ejecutara solo si tengo un id
