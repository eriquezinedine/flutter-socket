const express = require('express');
const path = require('path');
require('dotenv').config();


// App de express
const app = express();

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./socket/socket.js');


//Definimos nuestra carpeta ( Path ) publica
const publicPath = path.resolve( __dirname, 'public');

app.use(express.static(publicPath));



// antes enves de server estaba el app
server.listen(process.env.PORT,(error)=>{

    if(error) throw new Error(error);

    console.log('servidor corriendo en el puerto 3002')
});