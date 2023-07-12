const KategoriModel = require('../models/kategori')

const getAllKategori = async (req, res) => {
    try {
        const [data] = await KategoriModel.getAllKategori()
        res.status(200).json({
            message: 'GET List Kategori Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const createNewKategori = async (req, res) => {
    try {
        await KategoriModel.createNewKategori(req.body)
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

const createNewKategoriByUser = async (req, res) => {
    try {
        await KategoriModel.createNewKategoriByUser(req.body)
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

const updateKategori = async (req, res) => {
    try {
        const { idKategori } = req.params

        await KategoriModel.updateDataKategori(req.body, idKategori)
        res.status(201).json({
            message: `Update Kategori ${req.body.nama} Success`,
            data: req.body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const deleteKategori = async (req, res) => {
    try {
        const { idKategori } = req.params

        await KategoriModel.deleteKategori(idKategori)
        res.status(201).json({
            message: `Deleted Kategori Success`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllKategori,
    createNewKategori,
    createNewKategoriByUser,
    updateKategori,
    deleteKategori
}