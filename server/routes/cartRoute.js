const express = require('express');
const router = express.Router();
const { getCartByUser, addToCart, updateCart, removeFromCart } = require('../controllers/cartController');

router.route('/get-cart/:userId').get(getCartByUser);
router.route('/add-to-cart').post(addToCart);
router.route('/update-cart/:cartId').put(updateCart);
router.route('/remove-from-cart/:cartId').delete(removeFromCart);

module.exports = router;
