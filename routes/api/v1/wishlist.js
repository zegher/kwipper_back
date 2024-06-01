const express = require('express');
const router = express.Router();
const wishlistController = require('../../../controllers/api/v1/wishlistController.js');

//x / userid / wishlist
router.get('/', wishlistController.getWishlist);
router.post('/', wishlistController.addWishlistItem);

router.delete('/:id', wishlistController.deleteWishlistItem);

module.exports = router;