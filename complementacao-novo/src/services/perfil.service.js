const repo = require('../repositories/perfil.repository');
async function obterPerfil() { return await repo.buscarPerfil(); }
module.exports = { obterPerfil };