const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/api/v1/userController')
const shoppingCartRouter = require('./shoppingcart')
const wishlistController = require('./wishlist')

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

//get full user
router.get('/full/:id', userController.getFullUserById)

//post verify user
router.post('/verify-email', userController.verifyUser)

// shopping cart router
router.use('/:userId/shopping-cart', (req, res, next) => {
    req.userId = req.params.userId
    next()
}, shoppingCartRouter)

//post login user
router.post('/login', userController.loginUser);
// wishlist routerr
router.use('/:userId/wishlist', (req, res, next) => {
    req.userId = req.params.userId
    next()
}, wishlistController)

module.exports = router