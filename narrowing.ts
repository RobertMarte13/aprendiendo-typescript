// * Narrowing:

function mostrarLongitud(objeto: (string | number)) {

  // * Esto lo que hace es asegurarse de que lo que se retornara va a ser si o si un string, en caso contrario pasara y lo convertira a string y sacara la longitud.
  if(typeof objeto === "string") {
    return objeto.length
  }

  return objeto.toString().length
}

mostrarLongitud('1')

// * Ejemplo 2:
interface Mario {
  name:  'Mario',
  company: string,
  saltar(): void
}

interface Sonic {
  name:  'Sonic',
  company: string,
  correr(): void
}

type Personaje = Mario | Sonic;

// ? Si tenemos en las interfaces dos que tengan las misma propiedades y esta estan haciendo uso de la discriminacion lo que hacemos es usarlaafavor y hacer una condicion para sacar la funcion que queremos de una y de la otra.
// function jugar(personaje:  Personaje) {
//   if(personaje.name !== 'Sonic') {
//     return personaje.saltar()
//   }

//   return personaje.correr()
// }

// ? Ejemplo 2: este solo funciona para cuando no tenemos discriminacion o no tenemos un valor definido en una interfaz:

// * Type Guard
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr() !== undefined
}

// En caso de necesitarlo. Tratar de evitarlo.
function jugar(personaje: Personaje) {
  if(checkIsSonic(personaje)) {
    return personaje.correr()
  }

  return personaje.saltar()
}

