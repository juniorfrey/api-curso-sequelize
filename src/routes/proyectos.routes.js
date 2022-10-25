import {Router} from 'express';
import Jwt from "jsonwebtoken";
import {
  crearProyecto,
  getProyectos,
  actualizarProyecto,
  eliminarProyecto,
  prouectoID,
  getproyectoTareas,
} from "../controllers/proyectos.controller.js";
import {verifyToken} from "../controllers/auth.controller.js"

const router = Router();

router.get("/proyectos", verifyToken, getProyectos);
router.post("/proyecto", crearProyecto);
router.put("/proyectos/:id", actualizarProyecto);
router.delete("/proyectos/:id", eliminarProyecto);
router.get("/proyectos/:id", prouectoID);
router.get("/proyectos/:id/tareas", getproyectoTareas);



export default router;