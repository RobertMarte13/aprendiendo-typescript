// * Tuples
type CellValue = "X" | "O" | "";
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["X", "O", ""],
  ["X", "O", ""],
  ["X", "O", ""],
  // ["X", "O", "", ''], <-- Esto no se puede!
];

// Example duples: parecido a un useState
// type state = [string, (newName: string) => void] <-- Este seria una forma en la que el useState hace una duples para poder saber que se le pasa y que solo se le pasan dos argumentos o propiedades.
// const [newHero, setNewHero]: state = useState('thor')

// Example duples 2: Hexagesimal
type RGB2 = [number, number, number]; // <-- Este es una dupla que nos ayuda a indicar que el tipo que es un arreglo solo recibe 3 elementos.
const color_one: RGB2 = [255, 3, 3]