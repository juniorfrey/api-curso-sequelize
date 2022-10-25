import express  from "express";
import proyectosRutas from "./routes/proyectos.routes.js";
import tareasRutas from "./routes/tareas.routes.js";
import auhRutas from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

//Rutas
app.use(proyectosRutas);
app.use(tareasRutas);
app.use(auhRutas);


export default app;