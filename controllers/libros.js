// controllers/libros.js
const { response } = require('express');
// Models
const Libro = require('../models/libro');
// Bcrypt
const bcrypt = require('bcryptjs');
// JWT
const { generarJWT } = require('../helpers/jwt');

//Obtener todos los libros
const getLibros = async (req, res = response) => {
    try {
        const libros = await Libro.findAll();
        res.json({
            ok: true,
            libros
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

module.exports = {
    getLibros,
};