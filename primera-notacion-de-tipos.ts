// Este es una forma de tipar basicamente una propiedad.
const nombre: String = 'Miguel';

const persona = {
    name: 'Robert',
    age: 30
}

// Los tipos en typescript son los que tenemos en javascript.
let string: string = 'hola'
let number: number = 1
let nulo: null = null
// ect...

// Evitar el any porque este a parte de decir que ignore el tipo esta indicando que tambien nos quite el auto completado e incluso que no nos salgan errores.

// El unknown si que nos da errores y nos avisa de que esa propiedad no tiene tipo y que podria cambiar a futuro.

// * Evitar tipar cuando sea una variable sencilla porque ya lo infiere.
