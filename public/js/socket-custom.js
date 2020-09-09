var socket = io();

socket.on('connect', function () {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function () {

    console.log('Perdimos la conexión al servidor');

});

socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola Mundo'
}, function (resp) {

    console.log('Se disparó el callback:', resp);

});

socket.on('enviarMensaje', function (mensaje) {

    console.log('Servidor: ', mensaje);

});