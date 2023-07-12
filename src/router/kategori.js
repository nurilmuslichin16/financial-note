const express = require('express')
const KategoriController = require('../controller/kategori')

const router = express.Router()

router.get('/', KategoriController.getAllKategori)
router.post('/', KategoriController.createNewKategori)
router.post('/byUser', KategoriController.createNewKategoriByUser)
router.patch('/:idKategori', KategoriController.updateKategori)
router.delete('/:idKategori', KategoriController.deleteKategori)

module.exports = router