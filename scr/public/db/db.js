var fs = require("fs");

const db = {
    leerTabla: (name) => new Promise((resolve) => {
        fs.readFile(name, (err, buf) => {
            if (err) console.log('error')
            else { resolve(buf.toString()) }
        });
    }),
    //**************************************** */
    //Agregar dato
    agregarDato: (name, dato) => new Promise((resolve) => {
        fs.readFile(name, (err, buf) => {
            if (err) resolve('Error')
            else {
                let inf = buf.toString()

                if (inf.length == 0) {
                    dato._id = 0
                    fs.writeFile(name, JSON.stringify(dato), (err) => {
                        if (err) resolve('error')
                        else { resolve('dato Agregado') }
                    })
                }
                else {
                    let contador = 0
                    let datoArray = JSON.parse("[" + inf + "]")
                    datoArray.filter(x => {
                        contador = x._id
                    })
                    contador++
                    dato._id = contador
                    let variable = inf + ',' + JSON.stringify(dato)
                    fs.writeFile(name, variable, (err) => {
                        if (err) resolve('error')
                        else { resolve('dato Agregado') }
                    })
                }

            }
        })
    }),
    //**************************************** */
    //Eliminar dato
    eliminarDato: (name, id) => new Promise((resolve) => {
        fs.readFile(name, (err, buf) => {
            if (err) resolve('Error')
            else {
                let inf = buf.toString()
                let datoArray = JSON.parse("[" + inf + "]")
                let nuevoArray = datoArray.filter(x => id != x._id)
                let arrayActual = JSON.stringify(nuevoArray).slice(1, -1)
                fs.writeFile(name, arrayActual, (err) => {
                    if (err) resolve('error')
                    else { resolve('Dato Eliminado') }
                })
            }
        })
    }),
    //**************************************** */
    //Actualizar
    actualizarDato: (name, id, dato) => new Promise((resolve) => {
        fs.readFile(name, (err, buf) => {
            if (err) resolve('Error')
            else {
                let inf = buf.toString()
                let datoArray = JSON.parse("[" + inf + "]")

                datoArray.filter(x => {
                    if (id == x._id) {
                        x.estado = dato
                    }
                })
                let arrayActual = JSON.stringify(datoArray).slice(1, -1)
                fs.writeFile(name, arrayActual, (err) => {
                    if (err) resolve('error')
                    else { resolve('Dato Actualizado') }
                })
            }
        })
    }),
    
}


exports.db = db;