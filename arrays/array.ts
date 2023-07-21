// * Arrays formas de tipar.
// const lenguaje = [] <-- Esto esta mal o no dira que el tipo del arreglo es never, para arreglar esto podemos hacerlo de dos maneras.
// ? Primera manera: const lenguaje: const lenguaje: Array<string> = []
// ? Segunda manera: const lenguaje: string[] = []

// Pero si queremos que nuestro arreglo tenga mas de un tipo de dato en su interior lo que hacemos e lo siguiente:
const lenguaje: (string | number)[] = [];

lenguaje.push("javascript");
lenguaje.push(5);
// lenguaje.push(true) <-- Este no vale porque el tipo booleam no esta en los tipos permitidos para este arreglo.
