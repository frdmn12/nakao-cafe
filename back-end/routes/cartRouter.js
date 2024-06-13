const express = require("express");
const router = express.Router();
const { cartController } = require("../controllers");

// Get Cart by User Id
router.get("/:userId", cartController.cart_user_id);

// Insert product to cart
router.post("/", cartController.cart_insert);

// Update product in cart
router.put("/:cartId", cartController.cart_update);

// Delete product from cart
router.delete("/:cartId", cartController.cart_delete);




module.exports = router;