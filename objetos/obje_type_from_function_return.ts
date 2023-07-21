// * Type from function return

function createAddress() {
  return {
    planet: "mars",
    city: "twitch",
  };
}

type Address = ReturnType<typeof createAddress>; // <-- Esto va a darme el tipo de lo que returna esta funcion creadora de objetos. Asi sacamos los tipos de una funcion.

const locations: Address = {
  city: "new york",
  planet: "mars",
};
