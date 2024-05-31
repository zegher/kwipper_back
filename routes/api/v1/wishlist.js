const express = require('express');
const router = express.Router();
const wishlistController = require('../../../controllers/api/v1/wishlistController.js');

router.get('/', wishlistController.getWishlist);
router.post('/', wishlistController.addWishlistItem);

module.exports = router;