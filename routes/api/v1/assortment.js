const express = require('express')
const router = express.Router()
const assortmentController = require('../../../controllers/api/v1/assortmentController')

// POST new assortment
// router.post('/', assortmentController.createAssortment)

// GET new assortment
router.get('/', assortmentController.getAllAssortment)


module.exports = router