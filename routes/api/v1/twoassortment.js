const express = require('express')
const router = express.Router()
const TwoassortmentController = require('../../../controllers/api/v1/twoAssortmentcontroller');

// get assortment2
router.get('/', TwoassortmentController.getAss2)

// post assortment2
router.post('/', TwoassortmentController.createAssortment2)

// get assortment2 by id
router.get('/:id', TwoassortmentController.getAssortmentById)

module.exports = router