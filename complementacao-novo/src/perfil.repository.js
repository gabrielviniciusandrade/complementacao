const db = require('../database/conexao');

async function buscarPerfil() {
  const [rows] = await db.query('SELECT * FROM perfil LIMIT 1');
  return rows[0];
}
module.exports = { buscarPerfil };