const db = require('../database/conexao');

async function listarCertificados(fkPerfil) {
  const [rows] = await db.query(
    'SELECT * FROM certificados WHERE fk_perfil = ?', [fkPerfil]
  );
  return rows;
}
module.exports = { listarCertificados };