const express = require('express')
const HutangPiutangController = require('../controller/hutang-piutang')

const router = express.Router()

router.get('/hutang/:idUser', HutangPiutangController.getAllHutang)
router.get('/piutang/:idUser', HutangPiutangController.getAllPiutang)
router.post('/hutang', HutangPiutangController.createNewHutang)
router.post('/piutang', HutangPiutangController.createNewPiutang)
router.patch('/:idHutangPiutang', HutangPiutangController.updateHutangPiutang)
router.delete('/:idHutangPiutang', HutangPiutangController.deleteHutangPiutang)

module.exports = router