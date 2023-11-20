// models/asignacion.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Asignacion = sequelize.define('Asignacion', {
    fecha_asignacion: {
        type: DataTypes.DATE,
        allowNull: true, // puede ser nulo
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    libro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estudiante_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // puede ser nulo
    },
    profesor_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // puede ser nulo
    },
}, {
    tableName: 'asignaciones', // Ajusta el nombre de la tabla aquí
});

module.exports = Asignacion;