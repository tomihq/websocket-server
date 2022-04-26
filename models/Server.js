const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server{
    constructor (){
        this.port = process.env.PORT || 3000   ; //SI LO USAMOS LOCALMENTE DEBE PONERSE PRIMERO PUERTO Y LUEGO EL DE VARIABLE DE ENTORNO. EN HEROKU AL REVÉS.
        //this.port = 8080;
        this.app = express();
        //WebSocket 
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server);
        
         //Middlewares - Funcion que se ejecuta siempre que levantamos el servidor.
        this.middlewares();
        
        this.paths = {}
        
        //Rutas de mi aplicacion
        this.routes();

        //Sockets
        this.sockets();
    }


    middlewares(){
        //CORS
        this.app.use(cors());
        
        //Directorio Público
        this.app.use(express.static('public'));
       
        
    }

    routes(){
        //this.app.use(this.paths.auth, require('../routes/auth')) 
    }

    sockets(){
        this.io.on("connection", socketController);
    }

    listen(){
        this.server.listen(this.port, () =>{
            console.log("Servidor corriendo en el puerto:", this.port);

            
        });
    }

}


module.exports = Server;