//router/auth.js
const { Router } = require('express');

// Controllers
const { getLocations } = require('../controllers/locations');
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Obtener todas las ubicaciones
router.get('/', validarJWT, getLocations);


module.exports = router;