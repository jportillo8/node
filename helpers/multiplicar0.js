const fs = require('fs');
const colors = require('colors')


const crearArchivoAsync = async (base = 3, listar = false, max = 10) => {


    try {


        let salida = ''
        let consola = ''
        for (let i = 1; i <= max; i++) {
            salida += `${base} x ${i} = ${base * i} \n`
            consola += `${base} ${ 'x'.black } ${i} ${'='.blue} ${base * i} \n`
        }

        if (listar) {
            console.log('=================='.green);
            console.log('    Tabla del:'.green ,colors.blue (base));
            console.log('=================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivoAsync
}