const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
//****************************************************************** */
//seccion
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
// la cookie desaparese a las 24 horas
const oneDay = 1000 * 60 * 60 * 12;
//****************************************************************** */


//****************************************************************** */

const app = express();

//***************************************************************** */
//manejo llamados json
app.use(express.json({ limit: '16mb' }));
app.use(express.json());
//***************************************************************** */




//******************************************************************* */

//vistas y motor de plantillas
app.set('views', path.join(__dirname, './scr/view'));
app.set('view engine', 'ejs')
//manejo de post : json
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use(require('./scr/router.js'))
app.use(require('./scr/Serial.js'))
// static files
app.use(express.static(path.join(__dirname, './scr/public')));




app.listen(3000, () => {
    console.log('Servidor ok')
})
