//router/libros.js
const { Router } = require('express');

// Controllers
const { getLibros } = require('../controllers/libros');

// Middlewares
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Obtener todos los libros
router.get('/', validarJWT, getLibros);

module.exports = router;