//router/auth.js
const { Router } = require('express');

// Controllers
const { createUser, revalidateToken, loginUser, getUsers, updateUser, deleteUser } = require('../controllers/auth');
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear un nuevo usuario
router.post('/new', [
    //middlewares
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('user_name', 'El user_name es obligatorio').not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('role', 'El rol es obligatorio').not().isEmpty(),
    check('status', 'El status es obligatorio').not().isEmpty(),
    validarCampos
], createUser);

//Login
router.post('/', [
    //middlewares
    check('user_name', 'El user_name es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], loginUser);

//Revalidar token
router.get('/renew', [
    //middlewares
    validarJWT
], revalidateToken);

//Obtener todos los Usuarios
router.get('/', validarJWT, getUsers);

//Actualizar un usuario
router.put('/:id', [
    //middlewares
    validarJWT
], updateUser);

//Eliminar un usuario
router.delete('/:id', [
    //middlewares
    validarJWT
], deleteUser);


module.exports = router;