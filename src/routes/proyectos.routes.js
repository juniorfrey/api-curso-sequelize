import {Router} from 'express';
import { crearProyecto, getProyectos } from "../controllers/proyectos.controller.js";

const router = Router();

router.get("/proyectos", getProyectos);
router.post("/proyectos", crearProyecto);
router.put("/proyectos");
router.delete("/proyectos/:id");
router.get("/proyectos/:id");


export default router;