import { Router } from "express";
import AnimalControl from "../controllers/AnimalControl";

const router = Router();

const animalControl = new AnimalControl();

router.get("/", (req, res) => animalControl.listarTodos(req, res));

export default router;
