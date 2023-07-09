const UsersModel = require('../models/users')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers()
        res.status(200).json({
            message: 'GET Users Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    try {
        // Bcrypt Konfigurasi
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        await UsersModel.createNewUser(req.body, hashedPassword)
        res.status(201).json({
            message: 'Create User Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const updateUser = (req, res) => {
    const { idUser } = req.params

    res.json({
        message: `Update Users Success ID ${idUser}`,
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const { idUser } = req.params

    res.json({
        message: `Delete Users Success ID ${idUser}`
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}