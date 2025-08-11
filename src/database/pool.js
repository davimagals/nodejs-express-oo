import mysql from "mysql2/promise";

// pool é como um garçom que fica esperando para servir cada cliente/conexão,
// em vez de ter que contratar um novo garçom para cada novo cliente
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "kokaum",
});

export default pool;
