import express  from "express";
import * as http from 'http'; //ES 6
import { Server } from "socket.io";
import proyectosRutas from "./routes/proyectos.routes.js";
import tareasRutas from "./routes/tareas.routes.js";
import auhRutas from "./routes/auth.routes.js";


const app = express();
const server = http.createServer(app)

const io = new Server(server);
io.on('connection', (socket) => {
    console.log('Usuario conectado: ' + socket.id)

    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    })
})

app.use(express.json());

//Rutas
app.use(proyectosRutas);
app.use(tareasRutas);
app.use(auhRutas);


export default server;