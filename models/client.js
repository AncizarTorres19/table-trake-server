// models/client.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    identification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bills: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birthday_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'client', // Ajusta el nombre de la tabla aquí
});

module.exports = Client;