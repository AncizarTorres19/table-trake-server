// models/usuario.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Establishments = sequelize.define('Establishments', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tables: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'establishments', // Ajusta el nombre de la tabla aquí
});

module.exports = Establishments;