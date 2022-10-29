import { Router } from "express";

import {
  getTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
  tareaId,
} from "../controllers/tareas.controller.js";
import {verifyToken} from "../controllers/auth.controller.js"

const router = Router();

router.get("/tareas", verifyToken, getTareas);
router.post("/tarea", crearTarea);
router.put("/tarea/:id", actualizarTarea);
router.delete("/tarea/:id", eliminarTarea);
router.get("/tarea/:id", tareaId);

export default router;