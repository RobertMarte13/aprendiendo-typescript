// * Los enum en TypeScript sirven para establecer errores o datos que no sean finitos, como los dias de la semana y una cantidad de datos que tengamos establecidos ya.

// Ejemplo: Manejador de errores.

// ? JS: <- JavaScript.
const ERROR_TYPES = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

function mostrarMensajes(tipoError) {
  if(tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('Not Found')
  } else if(tipoError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('unauthorized')
  } else if(tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('forbidden')
  }
}

// ? TS: <- TypeScript.
const enum ERROR_TYPE {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

function mostrarMensajesError(tipoError: ERROR_TYPE) {
  if(tipoError === ERROR_TYPE.NOT_FOUND) {
    console.log('Not Found')
  } else if(tipoError === ERROR_TYPE.UNAUTHORIZED) {
    console.log('unauthorized')
  } else if(tipoError === ERROR_TYPE.FORBIDDEN) {
    console.log('forbidden')
  }
}

// TODO Importante destacar que cuando vamos a hacer codigo que se va a consumir fuera, osea que lo haremos para un tercero lo que debemos hacer es dejar el enum sin const. El const nos ayuda a ahorrar lineas de codigo.