// * Las aserciones de tipos son las que nos permiten indicar de forma manual que tipo de dato sera lo que nos devuelve un elemento, en pocas palabras hacemos que ts se fie de nosotros y sepa que tipo de dato sera el que debolvera cierto elemento, ejemplo:

// * ejemplo tratando de recuperar una etiqueta html.

// * Primera forma y la menos indicada que es usando as para inferir que tipo de dato es el que se nos devolvera.
const canvas = document.getElementById('span') as HTMLCanvasElement

if(canvas !== null) {
  const ctx = canvas.getContext('2d')
}

// * Segunda forma, es correcta pero no es la mas indicada. Aqui lo que estamos indicando o comprobando que en vez de ponerlo al lado donde estamos buscando la etiqueta html lo que hacemos es usar as despues de la comprobacion if para estar seguro de que este no viene null, y lo usamos entre parentesis.
const canvas2 = document.getElementById('span')

if(canvas2 !== null) {
  const ctx = (canvas2 as HTMLCanvasElement).getContext('2d')
}

// ? Tercera forma y la mas indicada: Esta lo que revisa es que canvas sea una instacia de HTMLCanvasElement.
const canvas3 = document.getElementById('span')

if(canvas3 instanceof HTMLCanvasElement) {
  const ctx = canvas3.getContext('2d')
}