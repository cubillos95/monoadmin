const express = require('express');
const router = express.Router()
var SerialPort = require('serialport');
/******************************************************************** */
const db = require('./public/db/db.js')
//******************************************************************** */
//configuracion


//******************************************************************** */
//funcion Asynchronous
setInterval(enviarInformacion, 15000);

//******************************************************************** */
let portName = '/dev/ttyUSB10';
//let portOuput = '/dev/ttyUSB0';

//let myPortOuput = new SerialPort(portOuput, 9600);

let myPort = new SerialPort(portName, 9600);

var Readline = SerialPort.parsers.Readline;

var parser = new Readline();

myPort.pipe(parser);
//******************************************************************** */


//Equivalente a las Api Rest 

myPort.on('open', openPuerto);    // Evento de abrir puerto
myPort.on('close', closePuerto);  // Evento de cerrar puerto
myPort.on('error', showError);      // Evento de error
parser.on('data', readPuerto);  // Evento nuevo dato


//******************************************************************* */
//datos Sensores
let datoSensores = ""
db.db.leerTabla("./scr/public/db/sensores.txt").then(x => datoSensores = x)


router.get('/datoSensoresSerial', (req, res) => {
    db.db.leerTabla("./scr/public/db/sensores.txt").then(x => datoSensores = x)
    res.send('<script>window.location.replace("/menu")</script>')
})
//******************************************************************* */
//datos Actuadores

router.get('/ActuadoresActivacion', (req, res) => {
    enviarInformacion()
    res.send("ok")
})

//****************************************************************** */


//funciones 

function openPuerto() {
    console.log('Puerto abrieto' + portName)
}
//******************************************************************** */
function closePuerto() {
    console.log('Puerto Cerrado')
}
//******************************************************************** */
function showError(error) {
    console.log(error)
}
//******************************************************************** */
function readPuerto(data) {
    const leerDatos = data.split(',')
    let datoArray = JSON.parse("[" + datoSensores + "]")
    datoArray.filter(x => {
        if (leerDatos[0] == x.idL && leerDatos[1] == x._id) {
            console.log('dato Conocido ' + leerDatos[1] + " " + leerDatos[2])
        }

    })
}
//******************************************************************** */
enviarInformacion()
function enviarInformacion() {

    db.db.leerTabla("./scr/public/db/actuadores.txt").then(x => {
        let datoArray = JSON.parse("[" + x + "]")
        let tamaño = datoArray.length
        let idDisp = []
        let idEstado = []
        let idGene = ""
        datoArray.filter(x => {
            idEstado.push(x.estado)
            idDisp.push(x._id)
            idGene = x.idL
        })
        let dataContru = "{\"idL\":\"" + idGene + "\"," + "\"tamaño\":" + tamaño + "," + "\"id\":[" + idDisp + "]," + "\"estado\":[" + idEstado + "]}"
        myPort.write(dataContru, error => {
            if (error) { console.log(erro) }
            else { }
        })



    })

    //   console.log("  \n")

}


//******************************************************************** */

module.exports = router