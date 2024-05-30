const { get } = require('http');
const { User } = require('../../../models/api/v1/User');

//get all wishlist items
const getWishlist = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('wishlist');
        res.status(200).send(user.wishlist);
    } catch (error) {
        res.status(500).send(error);
    }
};


module.exports = {
    getWishlist,
};