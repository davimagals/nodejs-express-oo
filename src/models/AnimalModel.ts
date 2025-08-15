import pool from "../database/pool.js";

export default class AnimalModel {
  // Listar todos os animais
  static async listarTodos(): Promise<object | null> {
    try {
      const [result] = await pool.query("SELECT * FROM animais");
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Buscar um animal pelo seu ID
  static async buscarPorId(id: number): Promise<object | null> {
    try {
      const [result] = await pool.query(
        "SELECT * FROM animais WHERE id = ?",
        [id]
      );

      return result[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Adicionar um animal
  static async adicionar(animal): Promise<number | null> {
    try {
      const [result] = await pool.query(
        `INSERT INTO animais
        (nome, especie, raca, data_nasc, peso)
        VALUES
        (?, ?, ?, ?, ?)`,
        [animal.nome, animal.especie, animal.raca, animal.data_nasc, animal.peso]
      );

      return result.insertId;
    } catch(error) {
      console.error(error);
      return null;
    }
  }

  // Editar um animal pelo ID
  static async editar(animal, id: number) {
    await pool.query("UPDATE todos SET title = ?, done = ? WHERE id = ?", [
      animal,
      id,
    ]);
    return this.getById(id);
  }

  // Apagar um animal pelo ID
  static async apagar(id) {
    await pool.query("DELETE FROM todos WHERE id = ?", [id]);
    return true;
  }
}
