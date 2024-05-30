const express = require('express');
const router = express.Router();
const shoppingCartController = require('../../../controllers/api/v1/shoppingcartController');

router.post('/', shoppingCartController.addShoppingCartItem);
router.get('/', shoppingCartController.getAllShoppingCartsItems);
router.delete('/:id', shoppingCartController.deleteShoppingCartItem);
router.put('/:id', shoppingCartController.updateShoppingCartItem);

module.exports = router;