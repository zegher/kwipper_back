const express = require('express')
const router = express.Router()
const reviewController = require('../../../controllers/api/v1/reviewController')

//get all reviews
router.get('/', reviewController.getAllReviews);

//post review
router.post('/', reviewController.postReview);

module.exports = router