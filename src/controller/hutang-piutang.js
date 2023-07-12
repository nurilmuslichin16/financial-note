const HutangPiutangModel = require('../models/hutang-piutang')

const getAllHutang = async (req, res) => {
    try {
        const [data] = await HutangPiutangModel.getAllHutang()
        res.status(200).json({
            message: 'GET List Hutang Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const getAllPiutang = async (req, res) => {
    try {
        const [data] = await HutangPiutangModel.getAllPiutang()
        res.status(200).json({
            message: 'GET List Piutang Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const createNewHutang = async (req, res) => {
    try {
        await HutangPiutangModel.createNewHutang(req.body)
        res.status(201).json({
            message: 'Create Hutang Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const createNewPiutang = async (req, res) => {
    try {
        await HutangPiutangModel.createNewPiutang(req.body)
        res.status(201).json({
            message: 'Create Piutang Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const updateHutangPiutang = async (req, res) => {
    try {
        const { idHutangPiutang } = req.params

        await HutangPiutangModel.updateHutangPiutang(req.body, idHutangPiutang)
        res.status(201).json({
            message: `Update Hutang Piutang ${req.body.nama_orang} Success`,
            data: req.body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

const deleteHutangPiutang = async (req, res) => {
    try {
        const { idHutangPiutang } = req.params

        await HutangPiutangModel.deleteHutangPiutang(idHutangPiutang)
        res.status(201).json({
            message: `Deleted Hutang Piutang Success`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Opps! Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllHutang,
    getAllPiutang,
    createNewHutang,
    createNewPiutang,
    updateHutangPiutang,
    deleteHutangPiutang
}