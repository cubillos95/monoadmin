const bcrypt = require('bcrypt')

const codigoPass = "$2b$10$GNtq4ZmPFVir9/dKb5mEe.7KRVK3Zr2xKQEMXhNvPjuEAghzCLfk2" //monoadmin
const numcrypt = 10
    //**************************************** */
const actuadores = {
    //**************************************** */
    //Crear pass
    crearPass:(inf)=> new Promise((resolve) => {
        bcrypt.hash(inf, numcrypt, (err, pass) => {
            if(err){resolve(err)}
            else{resolve(pass)}
        })
    }),
    //**************************************** */
    //rectificar pass
    rectPass:(inf)=> new Promise((resolve)=>{
        bcrypt.compare(inf, codigoPass, (err, res) => {
            if(err){resolve(0)}
            else{resolve(res)}
        })
    }),
}





exports.actuadores = actuadores;