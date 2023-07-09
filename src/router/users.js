const express = require('express')
const UserController = require('../controller/users')

const router = express.Router()

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createNewUser)
router.patch('/:idUser', UserController.updateUser)
router.delete('/:idUser', UserController.deleteUser)

module.exports = router