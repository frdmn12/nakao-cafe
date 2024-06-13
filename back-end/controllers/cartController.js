const {query} = require('../config');


// Get Cart by User Id
const cart_user_id = async (req, res) => {
  try {
    const userId = req.params.userId;
    
    let sql = `SELECT 
    c.id,
    c.qty,
    p.name,
    p.price,
    p.image,
    p.description
    FROM carts c
    JOIN products p ON 
    c.product_id = p.id
    WHERE c.user_id = ${userId}`;

    const data = await query(sql);
    console.log(data);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};


// Insert product to cart
const cart_insert = async (req, res) => {
  try {
    const {userId, productId, qty} = req.body;
    let sql = `INSERT INTO carts (user_id, product_id, qty) VALUES (${userId}, ${productId}, ${qty})`;
    await query(sql);
    return res.status(200).send('Product added to cart');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Update product in cart
const cart_update = async (req, res) => {
  try {
    const {qty} = req.body;
    const cartId = req.params.cartId;
    let sql = `UPDATE carts SET qty = ${qty} WHERE id = ${cartId}`;
    await query(sql);
    return res.status(200).send('Cart updated');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Delete product from cart
const cart_delete = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    let sql = `DELETE FROM carts WHERE id = ${cartId}`;
    await query(sql);
    return res.status(200).send('Product deleted from cart');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};


module.exports = {
    cart_user_id,
    cart_insert,
    cart_update,
    cart_delete
}