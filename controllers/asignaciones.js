// controllers/asignaciones.js
const { response } = require('express');

// Models
const Asignacion = require('../models/asignacion');

//Obtener todas las asignaciones
const getAsignaciones = async (req, res = response) => {
    try {
        const asignaciones = await Asignacion.findAll();
        res.json({
            ok: true,
            asignaciones
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Hacer una nueva asignación
const crearAsignacion = async (req, res = response) => {
    const { body } = req;
    try {
        const asignacion = await Asignacion.create(body);
        res.json({
            ok: true,
            asignacion
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
    getAsignaciones,
    crearAsignacion,
};