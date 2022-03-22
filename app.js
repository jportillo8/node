
const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar')

console.clear()
const base = 6

// crearArchivo(base)
crearArchivoAsync(base).then(nombre => console.log(nombre, 'Archivo')).catch(err => console.log(err))

