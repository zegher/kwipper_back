const { User } = require('../../../models/api/v1/User');

// add shopping cart item
const addShoppingCartItem = async (req, res) => {
    try {
        const { product_id, amount } = req.body;
        const userId = req.userId;

        if (!userId || !product_id || !amount) {
            return res.status(400).json({ message: 'User ID, product ID, and amount are required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.shopping_cart.push({ product_id, amount });

        await user.save();

        res.status(200).json({ message: 'Shopping cart item added successfully', data: { shoppingCart: user.shopping_cart } });
    } catch (error) {
        console.error('Error adding shopping cart item:', error);
        res.status(500).json({ message: 'Internal Server Error - addShoppingCartItem' });
    }
}

// get all shopping cart items
const getAllShoppingCartsItems = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ data: { shoppingCart: user.shopping_cart } });
    } catch (error) {
        console.error('Error getting all shopping cart items:', error);
        res.status(500).json({ message: 'Internal Server Error - getAllShoppingCartItems' });
    }
}

// delete shopping cart item
const deleteShoppingCartItem = async (req, res) => {
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

        const shoppingCartItem = user.shopping_cart.id(id);

        if (!shoppingCartItem) {
            return res.status(404).json({ message: 'Shopping cart item not found' });
        }

        user.shopping_cart.pull(id);

        await user.save();

        res.status(200).json({ message: 'Shopping cart item deleted successfully', data: { shoppingCart: user.shopping_cart } });
    } catch (error) {
        console.error('Error deleting shopping cart item:', error);
        res.status(500).json({ message: 'Internal Server Error - deleteShoppingCartItem' });
    }
}

// update shopping cart item
const updateShoppingCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { product_id, amount } = req.body;

        if (!userId || !id) {
            return res.status(400).json({ message: 'User ID, item ID are required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const shoppingCartItem = user.shopping_cart.id(id);

        if (!shoppingCartItem) {
            return res.status(404).json({ message: 'Shopping cart item not found' });
        }

        shoppingCartItem.product_id = product_id ? product_id : shoppingCartItem.product_id;
        shoppingCartItem.amount = amount ? amount : shoppingCartItem.amount;

        await user.save();

        res.status(200).json({ message: 'Shopping cart item updated successfully', data: { shoppingCart: user.shopping_cart } });
    } catch (error) {
        console.error('Error updating shopping cart item:', error);
        res.status(500).json({ message: 'Internal Server Error - updateShoppingCartItem' });
    }
}

module.exports = {
    addShoppingCartItem,
    getAllShoppingCartsItems,
    deleteShoppingCartItem,
    updateShoppingCartItem,
};