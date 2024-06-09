const express = require('express')
const router = express.Router()
const TwoassortmentController = require('../../../controllers/api/v1/twoAssortmentcontroller');

// get assortment2
router.get('/', TwoassortmentController.getAss2)

// post assortment2
router.post('/', TwoassortmentController.createAssortment2)

// get assortment2 by id
router.get('/:id', TwoassortmentController.getAssortmentById)

// deletea ssortment2 by id
router.delete('/:id', TwoassortmentController.deleteAssortment)

router.get('/user/:posted_by', TwoassortmentController.getAssortmentByUser)

//post image
router.post('/image/:id', TwoassortmentController.postImage)

module.exports = router