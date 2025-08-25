import pool from "../database/pool";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import Animal from "../entities/Animal";

export default class AnimalModel {
  // Listar todos os animais
  async listarTodos(): Promise<object | null> {
    try {
      const [result] = await pool.query("SELECT * FROM animal");
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Buscar um animal pelo seu ID
  async buscarPorId(id: number): Promise<object | undefined> {
    try {
      const [result] = await pool.query<RowDataPacket[]>(
        "SELECT * FROM animal WHERE id = ?",
        [id]
      );

      return result[0];
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  // Adicionar um animal
  async adicionar(animal: Animal): Promise<number | null> {
    try {
      const [result] = await pool.query<ResultSetHeader>(
        `INSERT INTO animal
        (nome, especie, raca, data_nasc, peso)
        VALUES
        (?, ?, ?, ?, ?)`,
        [
          animal.nome,
          animal.especie,
          animal.raca,
          animal.data_nasc,
          animal.peso,
        ]
      );

      return result.insertId;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
