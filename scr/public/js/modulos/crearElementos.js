const elementos = {
    crearEstructuraNodo: () => {
        window.document.getElementById('data').innerHTML = ""
        window.document.getElementById('nodo').innerHTML =
            "<div id='actuador'></div>" + "<br>" +
            "<div id='sensor'></div>"
    },
    //************************************************* */
    Boton: (id, idButton, mensaje) => {
        window.document.getElementById(id).innerHTML = "<button id='" + idButton + "'>" + mensaje + "</button>"
    },
    //************************************************* */
    crearTablaSensor: () => {
        window.document.getElementById("formulario").innerHTML =
            "<form action='/formSensor' method='post'>" +
            "<input type='text' name='nombre'  placeholder='Nombre'>" +
            "<input type='text' name='caracteristica'  placeholder='Caracteristica'> " +
            "<input type='submit' value='Submit'>"
        "</form>"
    },
    //************************************************* */
    crearTablaActuadores: () => {
        window.document.getElementById("formulario").innerHTML =
            "<form action='/formActuadores' method='post'>" +
            "<input type='text' name='nombre'  placeholder='Nombre'>" +
            "<input type='text' name='caracteristica'  placeholder='Caracteristica'> " +
            "<input type='submit' value='Submit'>"
        "</form>"
    },
    //************************************************* */
    tablaC: (tabla, id, name) => {
        let datoArray = JSON.parse("[" + tabla + "]")
        let generarDatosTabla = ''
        datoArray.filter(x => {
            generarDatosTabla = generarDatosTabla + "<tr>" +
                "<td>" + x.idL + "</td>" +
                "<td>" + x._id + "</td>" +
                "<td>" + x.nombre + "</td>" +
                "<td>" + x.caracteristica + "</td>" +
                "<td> <button id='" + id + "' name='" + x.idL + ',' + x._id + "'>Eliminar</button></td>" +
                "</tr>"
        })
        window.document.getElementById('tablaDatos').innerHTML =
            "<h3>" + name + "</h3>" + "<br>" +
            "<table>" +
            "<tr>" +
            "<td><strong>IdL</strong></td>" +
            "<td><strong>_id</strong></td>" +
            "<td><strong>Nombre</strong></td>" +
            "<td><strong>Caracteristica</strong></td>" +


            "</tr>" + generarDatosTabla
        "</table>"
    },
    //************************************************* */
    Limpíar: () => {
        window.document.getElementById('data').innerHTML = ""
        window.document.getElementById('nodo').innerHTML = ""
        window.document.getElementById('tablaDatos').innerHTML = ""
        window.document.getElementById('tablaDatos2').innerHTML = ""
        window.document.getElementById("formulario").innerHTML = ""
    },
    //************************************************* */
    tablaS: (tabla, name) => {
        let datoArray = JSON.parse("[" + tabla + "]")
        let generarDatosTabla = ''
        datoArray.filter(x => {
            generarDatosTabla = generarDatosTabla + "<tr>" +
                "<td>" + x.idL + "</td>" +
                "<td>" + x._id + "</td>" +
                "<td>" + x.nombre + "</td>" +
                "<td>" + x.caracteristica + "</td>" +
                "</tr>"
        })
        window.document.getElementById('tablaDatos').innerHTML =
            "<h3>" + name + "</h3>" + "<br>" +
            "<table>" +
            "<tr>" +
            "<td><strong>IdL</strong></td>" +
            "<td><strong>_id</strong></td>" +
            "<td><strong>Nombre</strong></td>" +
            "<td><strong>Caracteristica</strong></td>" +


            "</tr>" + generarDatosTabla
        "</table>"
    },
    //************************************************* */
    tablaS2: (tabla, name) => {
        let datoArray = JSON.parse("[" + tabla + "]")
        let generarDatosTabla = ''
        datoArray.filter(x => {
            generarDatosTabla = generarDatosTabla + "<tr>" +
                "<td>" + x.idL + "</td>" +
                "<td>" + x._id + "</td>" +
                "<td>" + x.nombre + "</td>" +
                "<td>" + x.caracteristica + "</td>" +
                "<td>" + x.estado + "</td>" +
                "<td> <button  id='estados' name='" + x._id + ',' + x.estado + "'>1/0</button></td>" +
                "</tr>"
        })
        window.document.getElementById('tablaDatos2').innerHTML =
            "<h3>" + name + "</h3>" + "<br>" +
            "<table>" +
            "<tr>" +
            "<td><strong>IdL</strong></td>" +
            "<td><strong>_id</strong></td>" +
            "<td><strong>Nombre</strong></td>" +
            "<td><strong>Caracteristica</strong></td>" +
            "<td><strong>Estado</strong></td>" +

            "</tr>" + generarDatosTabla
        "</table>"
    },

}

export { elementos }