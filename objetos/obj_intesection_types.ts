// * Intersection Types:
type HeroScalePower = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal';

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroBasicInfo = {
  name: string;
  age: number;
}

type HeroProperties = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  scalePower?: HeroScalePower
};

// * Example.
type Hero = HeroBasicInfo & HeroProperties; // Aqui lo que estoy haciendo es uniendo dos tipos diferentes para hacer un tipo nuevo con las cualidades de los dos.

const hero: Hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age, scalePower } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
    scalePower,
  };
}

const thor = createHero({ name: "thor", age: 1200 });

console.log(thor.isActive);

thor.id?.toLocaleString();

thor.scalePower = 'local'