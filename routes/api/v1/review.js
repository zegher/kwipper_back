const express = require('express')
const router = express.Router()
const reviewController = require('../../../controllers/api/v1/reviewController')

//get all reviews
router.get('/', reviewController.getAllReviews);

//get review by id
router.get('/:id', reviewController.getReviewsById);

//get review by posted_by
router.get('/posted_by/:posted_by', reviewController.getReviewsByUser);

//post review
router.post('/', reviewController.postReview);

module.exports = router