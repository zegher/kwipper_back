const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/api/v1/userController')

// POST new user
router.post('/', userController.createUser)

// GET all users
router.get('/', userController.getAllUsers)

//DELETE user by id
router.delete('/:id', userController.deleteUser)

//GET user by id
router.get('/:id', userController.getUserById)

//PUT user 
router.put('/:id', userController.putUser)

// // // get new assortment 2
// router.get('/two/:id', userController.getAllUsers2)

// // // post new assortment 2
// router.post('/two', userController.createUser2)

module.exports = router