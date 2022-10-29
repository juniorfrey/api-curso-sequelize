import {Router} from 'express';
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
router.post("/proyecto", verifyToken, crearProyecto);
router.put("/proyectos/:id", verifyToken, actualizarProyecto);
router.delete("/proyectos/:id", verifyToken, eliminarProyecto);
router.get("/proyectos/:id", verifyToken, prouectoID);
router.get("/proyectos/:id/tareas", verifyToken, getproyectoTareas);



export default router;