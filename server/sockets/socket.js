const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Cliente conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                resp: 'Todo salió BIEN!'
            });
        }
        else {
            callback({
                resp: 'Todo salió MAL!!!'
            });
        }

    });

});