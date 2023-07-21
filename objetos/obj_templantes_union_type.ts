// * Templantes Union Types
type HeroId = `${string}-${string}-${string}-${string}-${string}`; // <-- Esto no solo se aplica a los objetos sino que tambien se aplica a cadenas de texto.

type HeroBasicInfo = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};

const hero3: HeroBasicInfo = {
  name: "thor",
  age: 1500,
};

function createHero3(hero: HeroBasicInfo): HeroBasicInfo {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor3 = createHero3({ name: "thor", age: 1200 });
console.log(thor3.isActive); // --> true.

thor3.id?.toLocaleString();
// thor.id ?? 'No tiene id' // <-- Significa que si no tiene id le dara como valor por defecto el string de la derecha.

// * Ejemplo con colores.
type Hexagesimal = `#${string}`

// let color1: Hexagesimal = '0022ff' <-- Este no es valido ya que no tiene el --> "#".
let color2: Hexagesimal = '#0022ff'
