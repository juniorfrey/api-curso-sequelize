import express  from "express";
import proyectosRutas from "./routes/proyectos.routes.js";
import tareasRutas from "./routes/tareas.routes.js";

const app = express();

app.use(express.json());

app.use(proyectosRutas);
app.use(tareasRutas);


export default app;