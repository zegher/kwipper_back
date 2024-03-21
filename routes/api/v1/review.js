const express = require('express')
const router = express.Router()
const reviewController = require('../../../controllers/api/v1/reviewController')

//get all reviews
router.get('/', reviewController.getAllReviews);

//get review by id
router.get('/:id', reviewController.getReviewsById);

//post review
router.post('/', reviewController.postReview);

module.exports = router