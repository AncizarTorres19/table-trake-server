// models/usuario.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Locations = sequelize.define('Locations', {
    state: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    city: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
}, {
    tableName: 'locations', // Ajusta el nombre de la tabla aquí
});

module.exports = Locations;