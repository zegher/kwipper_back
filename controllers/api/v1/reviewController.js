const {Review} = require('../../../models/api/v1/Review');

//get all reviews
const getAllReviews = async (req, res) => {
    try {
        const review = await Review.find();

        res.status(200).json({ data: { review } });
    } catch (error) {
        console.error('Error getting all reviews:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//get review based on id
const getReviewsById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'User id is required' });
        }
        const review = await Review.findById(id);

        if(!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ data: { review } });
    }
    catch (error) {
        console.error('Error getting review by id:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//get users based by posted_by
const getReviewsByUser = async (req, res) => {
    try {
        const { posted_by } = req.params;

        if(!posted_by) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const review = await Review.find({ posted_by });

        if(!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ data: { review } });
    }
    catch (error) {
        console.error('Error getting review by id:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//post review
const postReview = async (req, res) => {
    try {
        const { posted_by, user_reviewed, rating, description } = req.body;

        // if(!review || !rating || !user || !product) {
        //     return res.status(400).json({ message: 'Review, rating, user and product are required' });
        // }

        const newReview = new Review({ posted_by, user_reviewed, rating, description });

        await newReview.save();

        res.status(201).json({ message: 'Review created successfully', data: { review: newReview }});
    } catch (error) {
        console.error('Error posting review:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete review
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ message: 'Review id is required' });
        }

        const deletedReview = await Review.findByIdAndDelete(id);

        if(!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export the createUser function
module.exports = {
    getAllReviews, postReview, getReviewsById, getReviewsByUser, deleteReview
};

