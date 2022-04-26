//Referencias del HTML

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () =>{
    console.log("Conectado");
    lblOffline.style.display = "none";
    lblOnline.style.display = "block";
});

socket.on('disconnect', ()=>{
    console.log("Desconectado del servidor");
    lblOnline.style.display = "none";
    lblOffline.style.display = "block";
})

socket.on('enviar-mensaje', (payload)=>{
    console.log("El servidor respondio: ", payload);
})


btnEnviar.addEventListener('click', ()=>{
   const mensaje = txtMensaje.value;
   const payload ={
        mensaje: mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
   
    
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log("Desde el server", id);
    });
    
})