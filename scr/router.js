const express = require('express');
const https = require('https');
const router = express.Router()
/******************************************************************** */
const db = require('./public/db/db.js')
const actuadores = require('./module/actuadores.js')
//******************************************************************* */
const codifoActuador = "6d6f6e6f316163747561646f72"
const codigoSensor = "6d6f6e6f3173656e736f72"
//******************************************************************* */
//******************************************************************** */
//form
router.post('/formActuadores', (req, res) => {
    const { nombre, caracteristica } = req.body
    db.db.agregarDato("./scr/public/db/actuadores.txt", {
        idL: codifoActuador,
        nombre: nombre,
        caracteristica: caracteristica,
        estado: 0
    }).then(x => res.send('<script>alert("' + x + '"); window.location.replace("/menu")</script>'))

})


router.post('/formSensor', (req, res) => {
    const { nombre, caracteristica } = req.body
    db.db.agregarDato("./scr/public/db/sensores.txt", {
        idL: codigoSensor,
        nombre: nombre,
        caracteristica: caracteristica
    }).then(x => res.send('<script>alert("' + x + '"); window.location.replace("/datoSensoresSerial")</script>'))


})

//******************************************************************** */

router.post('/EliminarActuador', (req, res) => {
    const { idL, id } = req.body
    db.db.eliminarDato("./scr/public/db/actuadores.txt", id).then(x => res.send(x))
})

//******************************************************************** */

router.post('/EliminarSensor', (req, res) => {
    const { idL, id } = req.body
    db.db.eliminarDato("./scr/public/db/sensores.txt", id).then(x => res.send(x))
})



//******************************************************************* */
//menu 
router.get('/menu', (req, res) => {
    res.render('menu')
})


//******************************************************************** */
//datos Actuadores
router.get('/datosActuadores', (req, res) => {
    db.db.leerTabla("./scr/public/db/actuadores.txt").then(x => {
        arrayActuadores = x
        res.send(x)
    })
})
//******************************************************************** */
//datos sensores
router.get('/datosSensores', (req, res) => {
    db.db.leerTabla("./scr/public/db/sensores.txt").then(x => res.send(x))
})




//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//Api esterna

//************************************************************************ */
//peticion externa
//idL
//id
//estado
//pass
router.post("/monobandidoForm", (req, res) => {
    const { idL, id, estado, pass } = req.body
    let estadoDato = 0
    actuadores.actuadores.rectPass(pass).then(x => {
        if (x) {
            if (idL == codifoActuador) {
                if (estado) { estadoDato = 1 }
                else { estadoDato = 0 }
                db.db.actualizarDato("./scr/public/db/actuadores.txt", id, estadoDato).then(x => res.send('<script>alert(" OK ! ");</script>'))

            }
            else { res.send('<script>alert("idL Incorrecto");</script>') }
        }
        else {
            res.send('<script>alert("pass Incorrecto");</script>')
        }
    })
})
//************************************************************************ */
//peticion Interna
router.post("/monobandidoFormInterno", (req, res) => {
    const { id, estado } = req.body
    db.db.actualizarDato("./scr/public/db/actuadores.txt", id, estado).then(x => res.send('ok'))

})



module.exports = router