const db = require('../database/conexao');

async function listarCursos(fkPerfil) {
  const [rows] = await db.query(
    'SELECT * FROM cursos WHERE fk_perfil = ?', [fkPerfil]
  );
  return rows;
}
module.exports = { listarCursos };