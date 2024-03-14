const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/api/v1/userController')

// POST new user
router.post('/', userController.createUser)

// GET all users
router.get('/', userController.getAllUsers)

//DELETE user by id
router.delete('/:id', userController.deleteUser)

module.exports = router