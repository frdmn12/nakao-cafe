const Cart = require("../db/models/cart");
const Product = require("../db/models/product");

// get cart by user
const getCartByUser = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  try {
    const cart = await Cart.findAll({
      where: { userId },
    });
    return res.status(200).json({ data: cart });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// add to cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cartoToUpdate = await Cart.findOne({
      where: { userId, productId },
    });
    // console.log(cart);
    if (cartoToUpdate) {
      cartoToUpdate.quantity += quantity;      
      await cartoToUpdate.save();

      return res.status(200).json({
        status: 200,
        message: "Product already in cart, cart updated successfully",
        data: cartoToUpdate,
      });

    } else {
      const newCart = await Cart.create({
        userId,
        productId,
        quantity,
      });

      return res.status(201).json({
        status: 201,
        message: "Product added to cart successfully",
        data: newCart,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// update cart
const updateCart = async (req, res) => {
  const { userId, quantity } = req.body;
  const cartId = req.params.cartId;
  try {
    const cart = await Cart.findOne({
      where: { userId, id: cartId },
    });
    if (cart) {
      // if zero quantity, remove from cart
      if (quantity === 0) {
        await cart.destroy();
        return res.status(200).json({
          status: 200,
          message: "Product removed from cart successfully",
        });
      }
      
      
      cart.quantity = quantity;
      await cart.save();
      return res.status(200).json({
        status: 200,
        message: "Cart updated successfully",
        data: cart,
      });

    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// remove from cart
const removeFromCart = async (req, res) => {
  const { userId } = req.body;
  const cartId = req.params.cartId;
  try {
    const cart = await Cart.findOne({
      where: { userId, id:cartId },
    });
    if (cart) {
      await cart.destroy();
      return res.status(200).json({
        status: 200,
        message: "Product removed from cart successfully",
      });
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCartByUser,
  addToCart,
  updateCart,
  removeFromCart,
};
