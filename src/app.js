import express  from "express";
import * as http from 'http'; //ES 6
/* import { Server } from "socket.io"; */
import proyectosRutas from "./routes/proyectos.routes.js";
import tareasRutas from "./routes/tareas.routes.js";
import auhRutas from "./routes/auth.routes.js";

import {webSocketPrueba} from './webserver/webservice.js';



const app = express();
const server = http.createServer(app);

/* const io = new Server(server);
io.on('connection', (socket) => {

    socket.on('chat', (msg) => {
        let mensaje = `${socket.id}: ${msg}`;
        io.emit("chat", mensaje);
    })
}) */

app.use(express.json());
app.use(express.static("client"));
//Web Services
webSocketPrueba(server);
//Rutas
app.use(proyectosRutas);
app.use(tareasRutas);
app.use(auhRutas);



export default server;