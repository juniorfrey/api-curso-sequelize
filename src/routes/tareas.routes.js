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
router.post("/tarea", verifyToken, crearTarea);
router.put("/tarea/:id", verifyToken, actualizarTarea);
router.delete("/tarea/:id", verifyToken, eliminarTarea);
router.get("/tarea/:id", verifyToken, tareaId);

export default router;