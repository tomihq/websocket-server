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


btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    socket.emit('enviar-mensaje', mensaje);
})