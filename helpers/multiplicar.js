
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 9) => {

    console.log('==================');
    console.log('    Tabla del:', base);
    console.log('==================');

    let salida = ''
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i} \n`
    }
    console.log(salida);

    // fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
    //     if(err) throw err
    //     console.log('tabla-5.txt creado');
    // })

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    console.log(`tabla-${base}.txt creado`)
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const tabla = ( base = 3 ) => {
//     let salida = ''
//     for (let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i} \n`
//     }
//     return new Promise((resolve, reject) => {
//         (salida) 
//         ? resolve(salida)
//         : reject('Error al calcular la tabla')
//     })
// }
// xxxxxxxxxxxxxxxxxxxxxxx

const crearArchivoAsync = async (base = 3) => {


    try {
        console.log('==================');
        console.log('    Tabla del:', base);
        console.log('==================');

        let salida = ''
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i} \n`
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
        
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo,
    crearArchivoAsync
}