// * Union types:

type HeroScalePower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// Ejemplo:
let example: HeroScalePower = 'planetary' // <-- Aqui solamente podemos usar las escalas que hemos indicado en HeroScalePower.
// Ejemplo 2:
let example2: number | string
example2 = 5
example2 = 'hasdu'
// example2 = true <-- Esto esta mal porque la variable solo espera dos tipos, o number o string.

type HeroBasicInfo4 = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  scalePower?: HeroScalePower
};

const hero4: HeroBasicInfo4 = {
  name: "thor",
  age: 1500,
};

function createHero4(hero: HeroBasicInfo4): HeroBasicInfo4 {
  const { name, age, scalePower } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
    scalePower,
  };
}

const thor4 = createHero4({ name: "thor", age: 1200 });
// const thor4 = createHero({ name: "thor", age: 1200, scalePower: 'local' });
// console.log(thor.isActive); // --> true.

// thor.id?.toLocaleString();

thor4.scalePower = 'local'
// thor.HeroScalePower = 'localasd' <-- Esto esta mal ya que las opciones son las que le indicamos al tipo.