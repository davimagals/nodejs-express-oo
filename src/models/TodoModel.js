import db from "../database/pool.js";

export default class TodoModel {
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM todos");
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
    return rows[0] || null;
  }

  static async create(title) {
    const [result] = await db.query("INSERT INTO todos (title) VALUES (?)", [
      title,
    ]);
    return { id: result.insertId, title, done: false };
  }

  static async update(id, title, done) {
    await db.query("UPDATE todos SET title = ?, done = ? WHERE id = ?", [
      title,
      done,
      id,
    ]);
    return this.getById(id);
  }

  static async delete(id) {
    await db.query("DELETE FROM todos WHERE id = ?", [id]);
    return true;
  }
}
