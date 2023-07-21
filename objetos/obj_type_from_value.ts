// * Type From Value, Example:

const address = {
  planet: 'earth',
  city: 'new york'
}

type Address2 = typeof address // El typeof aqui tiene mas utilidades que el de solo dar el tipo de las propiedades y variables. Aqui estamos sacando por los tipos de address un nuevo tipo a base de los tipos de un objeto con typeof.

const addressTwitch: Address2 = {
  planet: 'Mars',
  city: 'Twitch'
}