const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolio.controller');

router.get('/', controller.renderizarPortfolio);

module.exports = router;