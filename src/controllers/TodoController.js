import TodoModel from "../models/TodoModel.js";

export default class TodoController {
  async getAll(req, res) {
    const todos = await TodoModel.getAll();
    res.json(todos);
  }

  async getById(req, res) {
    const id = parseInt(req.params.id);
    const todo = await TodoModel.getById(id);
    if (!todo) {
      return res.status(404).json({ error: "TODO não encontrado" });
    }
    res.json(todo);
  }

  async create(req, res) {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }
    const todo = await TodoModel.create(title);
    res.status(201).json(todo);
  }

  async update(req, res) {
    const id = parseInt(req.params.id);
    const existing = await TodoModel.getById(id);
    if (!existing) {
      return res.status(404).json({ error: "TODO não encontrado" });
    }
    const { title = existing.title, done = existing.done } = req.body;
    const updated = await TodoModel.update(id, title, done);
    res.json(updated);
  }

  async delete(req, res) {
    const id = parseInt(req.params.id);
    const existing = await TodoModel.getById(id);
    if (!existing) {
      return res.status(404).json({ error: "TODO não encontrado" });
    }
    await TodoModel.delete(id);
    res.status(204).send();
  }
}
