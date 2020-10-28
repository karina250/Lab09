//console.log('Hola mundo');


//usuario:userSalazar
//contrasena: nJpoNB9UyOhMEK49

const express = require('express');
const { dbconection } = require('./database/config')
require('dotenv').config();
const cors = require('cors');

//despliege del servidor
const server = express();

//configurando cors
server.use(cors());

//primera peticion get
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio rest'
    });
});
//conexion a la base
dbconection();
//console.log(process.env);

//
server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto> ' + process.env.PORT)
    console.log('Cinthya Salazar Huamanjulca');
});