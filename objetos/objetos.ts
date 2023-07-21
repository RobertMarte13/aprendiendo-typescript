// * Los objetos tienen inferencias de datos.

type Hero = {
    name: string,
    age: number
}

const hero: Hero = {
    name: 'superman',
    age: 1500
}

// hero.name = 1203 <-- Esto no se puede X
// Si queremos agregar una nueva propiedad al objeto no podremos tampoco ya que los unicos que especificamos fue dos propiedades.
// hero.power = 1200 <-- Esto no se puede si no lo especificamos.

// Que pasa si queremos hacer una funcion creadora de heroes que se paresca a la que isimos por defecto arriba?
// Pues que aparentemente son iguales pero no es el tipo hero que es lo que queremos.

function createHero(name: string, age: number): Hero {
    return {name, age}
}

const thor = createHero('thor', 1200)

