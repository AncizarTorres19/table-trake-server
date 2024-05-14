//router/clients.js
const { Router } = require('express');

// Controllers
const { getClients, updateClient, createClient, deleteClient } = require('../controllers/clients');

// Middlewares
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Obtener todos los clientes
router.get('/', validarJWT, getClients);

//Actualizar un cliente
router.put('/:id', validarJWT, updateClient);

//Crear un nuevo cliente
router.post('/', validarJWT, createClient);

//Borrar un cliente
router.delete('/:id', validarJWT, deleteClient);

module.exports = router;