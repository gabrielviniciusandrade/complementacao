const repo = require('../repositories/certificado.repository');
async function listarCertificados(fkPerfil) { return await repo.listarCertificados(fkPerfil); }
module.exports = { listarCertificados };