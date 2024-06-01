const { get } = require('http');
const { User } = require('../../../models/api/v1/User');
//get all wishlist items
const getWishlist = async (req, res) => {
    try {
        const userId = req.userId;

        if(!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ data: { wishlist: user.wish_list } });

    } catch (error) {
        console.error('Error getting all wishlist items:', error);
        res.status(500).json({ message: 'Internal Server Error - getAllShoppingCartItems' });
    }
};

//post wishlist
const addWishlistItem = async (req, res) => {
    try {
        const { product_id } = req.body;
        const userId = req.userId;

        if (!userId || !product_id) {
            return res.status(400).json({ message: 'User ID and product ID are required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.wish_list.push({ product_id });

        await user.save();


        res.status(200).json({ message: 'Wishlist item added successfully', data: { wishlist: user.wish_list } });
    } catch (error) {
        console.error('Error adding wishlist item:', error);
        res.status(500).json({ message: 'Internal Server Error - addWishlistItem' });
    }
}

//delete wishlist item
const deleteWishlistItem = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;


        if (!userId || !id) {
            return res.status(400).json({ message: 'User ID and item ID are required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const wishlistItem = user.wish_list.id(id);

        if (!wishlistItem) {
            return res.status(404).json({ message: 'Wishlist item not found' });
        }

        user.wish_list.pull(wishlistItem);

        await user.save();

        res.status(200).json({ message: 'Wishlist item deleted successfully', data: { wishlist: user.wish_list } });
    } catch (error) {
        console.error('Error deleting wishlist item:', error);
        res.status(500).json({ message: 'Internal Server Error - deleteWishlistItem' });
    }
}


module.exports = {
    getWishlist, addWishlistItem, deleteWishlistItem,
};