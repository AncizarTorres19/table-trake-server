// controllers/clientes.js
const { response } = require('express');
const { Sequelize, Op } = require('sequelize');
// Models
const Locations = require('../models/locations');

//Obtener todas las ubicaciones
const getLocations = async (req, res = response) => {
    try {
        const locations = await Locations.findAll();
        res.json({
            ok: true,
            locations,
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
    getLocations,
};