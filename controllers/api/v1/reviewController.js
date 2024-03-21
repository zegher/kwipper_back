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

// Export the createUser function
module.exports = {
    getAllReviews
};

