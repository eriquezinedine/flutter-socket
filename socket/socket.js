const { io } = require("../index.js");

//Mensajes de sockets

io.on('connection', client => { //* Es la conexion del socket

    console.log('cliente conectado');


    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    //* .on() : es para escuchar algo ===== .emit() : es para enviar informacion
    client.on('mensaje',(payload)=>{
        console.log('Mensajee..!!',payload)
        io.emit('mensaje',{admin:'Nuevo mensaje para todos'}); //! Cuando utilizo el io ... significa que lo estoy emitiendo para todos mis usuario o clientes
    
    });



});
