import AnimalModel from "../models/AnimalModel";
import { Request, Response } from "express";

export default class AnimalControl {
  // Listar todos os animais
  async listarTodos(req: Request, res: Response) {
    const animalModel = new AnimalModel();
    const lista_animais = await animalModel.listarTodos();

    res.status(200);
    res.json(lista_animais);
  }
}
