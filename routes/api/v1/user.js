const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/api/v1/userController')

// POST new user
router.post('/', userController.createUser)

module.exports = router