// * Arreglo de objetos:

type HeroScalePower =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  scalePower?: HeroScalePower;
};

const HerosWithBasicInfo: Hero[] = [];

// De esta manera podria hacer objetos con la caracteristicas del typo de hero.
HerosWithBasicInfo.push(
  {
    name: "robert",
    age: 23,
    scalePower: "planetary",
  },
  {
    name: "Romartig",
    age: 21,
    scalePower: "local",
  }
);
