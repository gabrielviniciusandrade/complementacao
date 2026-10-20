const repo = require('../repositories/curso.repository');
async function listarCursos(fkPerfil) { return await repo.listarCursos(fkPerfil); }
module.exports = { listarCursos };