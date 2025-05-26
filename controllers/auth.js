// controllers/auth.js
const { response } = require('express');
// Models
const User = require('../models/user');
// Bcrypt
const bcrypt = require('bcryptjs');
// JWT
const { generarJWT } = require('../helpers/jwt');

//Crear un nuevo usuario
const createUser = async (req, res = response) => {
    try {
        const { user_name, password } = req.body;

        // Verificar si el user_name existe
        const existe_user_name = await User.findOne({ where: { user_name } });

        if (existe_user_name) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya está registrado'
            });
        }

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        const passwordEncriptada = bcrypt.hashSync(password, salt);

        // Crear objeto User con contraseña encriptada
        const user = new User({
            ...req.body,
            password: passwordEncriptada
        });

        // Guardar user en BD
        await user.save();

        // Generar el JWT
        const token = await generarJWT(user.id, user.user_name);

        res.json({
            ok: true,
            msg: 'register',
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Login
const loginUser = async (req, res = response) => {
    const { user_name, password } = req.body;

    try {
        // Verificar si el user_name existe
        const userDB = await User.findOne({ where: { user_name } });

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'user_name no encontrado'
            });
        };

        // Validar el password
        const validPassword = bcrypt.compareSync(password, userDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password no válido'
            });
        };

        // Generar el JWT
        const token = await generarJWT(userDB.id, userDB.name);

        res.json({
            ok: true,
            msg: 'login',
            user: userDB,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Revalidar token
const revalidateToken = async (req, res = response) => {

    const { uid, name } = req;

    //Generar el JWT
    const token = await generarJWT(uid, name);

    //Obtener el usuario por el uid
    const user = await User.findByPk(uid);

    res.json({
        ok: true,
        msg: 'renew',
        token,
        user
    });
};

//Obtener todos los Usuarios
const getUsers = async (req, res = response) => {
    try {
        const users = await User.findAll();

        res.json({
            ok: true,
            users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Actualizar un usuario
const updateUser = async (req, res = response) => {
    const uid = req.params.id;
    try {
        const userDB = await User.findByPk(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        // Actualizaciones
        const { password, ...campos } = req.body;

        if (userDB.user_name !== user_name) {
            const existe_user_name = await User.findOne({ where: { user_name } });
            if (existe_user_name) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese user_name'
                });
            }
        }

        campos.user_name = user_name;

        // Actualizar usuario
        await userDB.update(campos);

        res.json({
            ok: true,
            user: userDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

//Eliminar un usuario
const deleteUser = async (req, res = response) => {
    const uid = req.params.id;
    try {
        const userDB = await User.findByPk(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        await userDB.destroy();

        res.json({
            ok: true,
            msg: 'Usuario eliminado'
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
    createUser,
    loginUser,
    revalidateToken,
    getUsers,
    updateUser,
    deleteUser
};