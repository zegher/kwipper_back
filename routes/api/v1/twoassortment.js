const express = require('express')
const router = express.Router()
const TwoassortmentController = require('../../../controllers/api/v1/twoAssortmentcontroller');

// get assortment2
router.get('/', TwoassortmentController.getAss2)

module.exports = router