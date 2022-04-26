const socketController = (socket) => {
    
    console.log('Cliente conectado ', socket.id);
    
     socket.on('disconnect', () =>{
         //console.log('Cliente desconectado ', socket.id)
     })

     socket.on('enviar-mensaje', (payload, callback) =>{
         console.log("Mensaje de cliente: ", payload);
         socket.broadcast.emit('enviar-mensaje', payload);

         const id = 123456;
         callback(id);

     })

 }

 module.exports = {
     socketController
 }