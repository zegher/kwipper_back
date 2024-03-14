const express = require('express')
const router = express.Router()
const assortmentController = require('../../../controllers/api/v1/assortmentController')

// POST new assortment
router.post('/', assortmentController.createAssortment)

// GET new assortment
router.get('/', assortmentController.getAllAssortment)

//DELETE assortment by id
router.delete('/:id', assortmentController.deleteAssortment)

//GET assortment by id
router.get('/:id', assortmentController.getAssortmentById)

module.exports = router