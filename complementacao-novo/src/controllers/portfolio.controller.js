const perfilService = require('../services/perfil.service');
const cursoService = require('../services/curso.service');
const certificadoService = require('../services/certificado.service');

async function renderizarPortfolio(req, res) {
  const perfil = await perfilService.obterPerfil();
  const cursos = await cursoService.listarCursos(perfil.id);
  const certificados = await certificadoService.listarCertificados(perfil.id);
  res.render('portfolio', { perfil, cursos, certificados });
}

module.exports = { renderizarPortfolio };