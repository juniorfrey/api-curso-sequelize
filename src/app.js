import express  from "express";
import proyectosRutas from "./routes/proyectos.routes.js";

const app = express();

app.use(express.json());

app.use(proyectosRutas);


export default app;