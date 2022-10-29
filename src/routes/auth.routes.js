import { Router } from "express";

import {login, registro} from '../controllers/auth.controller.js';

const router = Router();

router.get("/login", login);
router.post("/registro", registro);

export default router;
