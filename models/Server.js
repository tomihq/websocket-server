const express = require('express')
const cors = require('cors');

class Server{
    constructor (){
        this.port = process.env.PORT || 3000   ; //SI LO USAMOS LOCALMENTE DEBE PONERSE PRIMERO PUERTO Y LUEGO EL DE VARIABLE DE ENTORNO. EN HEROKU AL REVÉS.
        //this.port = 8080;
        this.app = express();
         //Middlewares - Funcion que se ejecuta siempre que levantamos el servidor.
        this.middlewares();
        
        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            usuarios: '/api/usuarios',
            productos: '/api/productos',
            uploads: '/api/uploads'
            
        }
        
        //Rutas de mi aplicacion
        this.routes();
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

    listen(){
        this.app.listen(this.port, () =>{
            console.log("Servidor corriendo en el puerto:", this.port);
        });
    }

}


module.exports = Server;