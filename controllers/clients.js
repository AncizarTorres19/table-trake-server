// controllers/clientes.js
const { response } = require('express');
const { Sequelize, Op } = require('sequelize');
// Models
const Client = require('../models/client');

//Obtener todos los clientes
const getClients = async (req, res = response) => {
    console.log('Obteniendo clientes')
    try {
        const clients = await Client.findAll();
        res.json({
            ok: true,
            clients,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Actualizar un cliente
const updateClient = async (req, res = response) => {
    const id = req.params.id;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un cliente con ese id'
            });
        }
        await client.update(req.body);
        res.json({
            ok: true,
            client,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Crear un nuevo cliente
const createClient = async (req, res = response) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.json({
            ok: true,
            client,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Borrar un cliente
const deleteClient = async (req, res = response) => {
    const id = req.params.id;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un cliente con ese id'
            });
        }
        await client.destroy();
        res.json({
            ok: true,
            msg: 'Cliente eliminado',
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
    createClient,
    deleteClient,
    getClients,
    updateClient,
};