//router/asignaciones.js
const { Router } = require('express');

// Controllers
const { getAsignaciones, crearAsignacion } = require('../controllers/asignaciones');

// Middlewares
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Obtener todas las asignaciones
router.get('/', validarJWT, getAsignaciones);

//Hacer una nueva asignación
router.post('/create', validarJWT, crearAsignacion);

module.exports = router;