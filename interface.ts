// * Interface 
// Lo interesante de las interfaces es que podemos usar extends y usar propiedades de otras interfaces para agregar mas funciones a otra.
interface Products {
  readonly id: number,
  nombre: string,
  precio: number,
  quantity: number
}

// Ademas de tener las propiedades de Products agrega una propiedad mas que es talla.
interface Zapatilla extends Products{
  talla: number
} 

interface CarritoDeCompras {
  totalPrice: number,
  products: (Products | Zapatilla)[] // <-- Aqui lo que estoy haciendo es decirle que o es un arreglo de products o de zapatillas.
}

// Dos formas de tipar una funcion con interfaces:
// Primera forma y la mas recomendada:
// interface CarritoOps {
//   add: (product: Products) => void,
//   remove: (product: number) => void,
//   clear: () => void 
// }

// Segunda forma:
interface CarritoOps {
  add(product: Products): void,
  remove(product: number): void,
  clear(): void 
}

const products1: CarritoDeCompras = {
  totalPrice: 2000,
  products: [
    {
      id: 0,
      nombre: 'nike',
      precio: 2000,
      quantity: 2,
      talla: 5
    }
  ]
}

