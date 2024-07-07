const express = require("express");
const router = express.Router();
const { cartController } = require("../controllers");
const authenticateJWT = require("../helpers/auth");


// Get Cart by User Id
router.get("/:userId", authenticateJWT, cartController.cart_user_id);

// Insert product to cart
router.post("/", authenticateJWT,cartController.cart_insert);

// Update product in cart
router.put("/:cartId", authenticateJWT,cartController.cart_update);

// Delete product from cart
router.delete("/:cartId", authenticateJWT,cartController.cart_delete);




module.exports = router;