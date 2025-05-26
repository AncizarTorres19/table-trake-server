// controllers/clientes.js
const { response } = require('express');
const { Sequelize, Op } = require('sequelize');
// Models
const Establishments = require('../models/establishments');

//Obtener todos los establecimientos
const getEstablishments = async (req, res = response) => {
    console.log('Obteniendo establecimientos')
    try {
        const establishments = await Establishments.findAll();
        res.json({
            ok: true,
            establishments,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Actualizar un establecimiento
const updateEstablishment = async (req, res = response) => {
    const id = req.params.id;
    try {
        const establishment = await Establishments.findByPk(id);
        if (!establishment) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un establecimiento con ese id'
            });
        }
        await establishment.update(req.body);
        res.json({
            ok: true,
            establishment,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Crear un nuevo establecimiento
const createEstablishment = async (req, res = response) => {
    try {
        const establishment = new Establishments(req.body);
        await establishment.save();
        res.json({
            ok: true,
            establishment,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Eliminar un establecimiento
const deleteEstablishment = async (req, res = response) => {
    const id = req.params.id;
    try {
        const establishment = await Establishments.findByPk(id);
        if (!establishment) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un establecimiento con ese id'
            });
        }
        await establishment.destroy();
        res.json({
            ok: true,
            msg: 'Establecimiento eliminado'
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
    getEstablishments,
    updateEstablishment,
    createEstablishment,
    deleteEstablishment
};