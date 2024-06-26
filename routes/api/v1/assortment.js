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

//GET assortment by posted_by
router.get('/posted_by/:posted_by', assortmentController.getAssortmentByPostedBy)

//PUT assortment
router.put('/:id', assortmentController.updateAssortment)

//get assortment2
// router.get('/two', assortmentController.getAss2)

//post assortment2
// router.post('/two', assortmentController.createAssortment2)

module.exports = router