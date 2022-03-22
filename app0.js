

const { crearArchivoAsync } = require('./helpers/multiplicar0')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear()

// const [ , , arg3 = 'base=3' ] = process.argv
// const [ , base = 6] = arg3.split('=')

// console.log(argv)


crearArchivoAsync(argv.b, argv.l, argv.m)
    .then(nombre => console.log(nombre.rainbow, 'Archivo'))
    .catch(err => console.log(err))

// Resumen de la clase
// Yargs es una libreria que nos ayuda a enviar parametros
// con las condiciones necesarias para nuestra aplicacion.