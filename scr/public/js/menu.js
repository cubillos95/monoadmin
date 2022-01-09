import { elementos } from "./modulos/crearElementos.js";
import { llamada } from "./modulos/ajax.js"
//********************************************************************* */



window.document.getElementById('menu').addEventListener('click', x => {
    if (x.target.id == "creadNodo") {
        elementos.Limpíar()
        elementos.crearEstructuraNodo()
        elementos.Boton("actuador", "botonActuador", "Actuadores")
        elementos.Boton("sensor", "botonSensor", "Sensores")
    }
})

//********************************************************************* */

window.document.getElementById('nodo').addEventListener('click', x => {
    if (x.target.id == "botonActuador") {
        elementos.crearTablaActuadores()
        llamada.solicitudGet('/datosActuadores').then(datoLLamada => {
            elementos.tablaC(datoLLamada, 'EliminarActuador', "Actuadores agregados")
        })
    }
    //********************************************* */
    if (x.target.id == "botonSensor") {
        elementos.crearTablaSensor()
        llamada.solicitudGet('/datosSensores').then(datoLLamada => {
            elementos.tablaC(datoLLamada, "EliminarSensor", "Sensores agregados")
        })
    }
})

//********************************************************************* */

window.document.getElementById('tablaDatos').addEventListener('click', x => {
    if (x.target.id == "EliminarActuador") {
        const dato = x.target.name.split(',')
        llamada.solicitudPos('/EliminarActuador', JSON.stringify({ idL: dato[0], id: dato[1] })).then(x => { alert(x), window.location.replace("/menu") })
    }
    if (x.target.id == "EliminarSensor") {
        const dato = x.target.name.split(',')
        llamada.solicitudPos('/EliminarSensor', JSON.stringify({ idL: dato[0], id: dato[1] })).then(x => { alert(x), window.location.replace("/datoSensoresSerial") })
    }
})



//********************************************************************* */
//ver data

window.document.getElementById('verData').addEventListener('click', x => {
    elementos.Limpíar()
    llamada.solicitudGet('/datosSensores').then(datoLLamada => {
        elementos.tablaS(datoLLamada, "Sensores")
    })

    llamada.solicitudGet('/datosActuadores').then(datoLLamada => {
        elementos.tablaS2(datoLLamada, "Actuadores")
    })
})


//************************************************************************ */
//Cambiar de estado
window.document.getElementById('tablaDatos2').addEventListener('click', x => {
    if (x.target.id == "estados") {
        const dato = x.target.name.split(',')
        let estado
        if (dato[1] == 1) { estado = 0 }
        else { estado = 1 }
        llamada.solicitudPos('/monobandidoFormInterno', JSON.stringify({ id: dato[0], estado: estado })).then(x => {
            llamada.solicitudGet('/datosActuadores').then(datoLLamada => {
                elementos.tablaS2(datoLLamada, "Actuadores")

                llamada.solicitudGet('/ActuadoresActivacion').then(datoLLamada => {})
            })
        })
    }
})