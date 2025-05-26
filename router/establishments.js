//router/auth.js
const { Router } = require('express');

// Controllers
const { getEstablishments, updateEstablishment, createEstablishment, deleteEstablishment } = require('../controllers/establishments');
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Obtener todos los establecimientos
router.get('/', validarJWT, getEstablishments);

//Actualizar un establecimiento
router.put('/:id', [
    //middlewares
    validarJWT
], updateEstablishment);

//Crear un nuevo establecimiento
router.post('/', [
    //middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('state', 'El departamento es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatoria').not().isEmpty(),
    check('address', 'La dirección es obligatoria').not().isEmpty(),
    check('phone', 'El teléfono es obligatorio').not().isEmpty(),
    check('tables', 'El número de mesas es obligatorio').not().isEmpty(),
    check('type', 'El tipo de establecimiento es obligatorio').not().isEmpty(),
    validarJWT
], createEstablishment);

//Eliminar un establecimiento
router.delete('/:id', [
    //middlewares
    validarJWT
], deleteEstablishment);


module.exports = router;