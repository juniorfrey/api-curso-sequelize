import {Router} from 'express';
import {
  crearProyecto,
  getProyectos,
  actualizarProyecto,
  eliminarProyecto,
} from "../controllers/proyectos.controller.js";

const router = Router();

router.get("/proyectos", getProyectos);
router.post("/proyectos", crearProyecto);
router.put("/proyectos/:id", actualizarProyecto);
router.delete("/proyectos/:id", eliminarProyecto);
router.get("/proyectos/:id");


export default router;