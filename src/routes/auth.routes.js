import { Router } from "express";

import {login, registro, htmllOGIN} from '../controllers/auth.controller.js';

const router = Router();

router.get("/login", login);
router.post("/registro", registro);
router.get("/", htmllOGIN);

export default router;
