const Order = require("../db/models/order");
const OrderItem = require("../db/models/orderItem");
const Product = require("../db/models/product");
const Cart = require("../db/models/cart");
const { or } = require("sequelize");

// get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    return res.status(200).json({
      status: 200,
      message: "Get All orders",
      data: orders,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// get order by user
const getOrderByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.findAll({
      where: { userId },
    });
    return res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// get order by id
const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findOne({
      where: { id: orderId },
    });
    return res.status(200).json({ data: order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// create order
const createOrder = async (req, res) => {
  const { userId, listCart } = req.body;
  try {
    // 1. Membuat order
    const newOrder = await Order.create({
      userId,
      status: "pending",
      total: 0,
    });

    // 2. Membuat order item
    let totalAmount = 0;
    // listCart is id that user want to buy
    for (let i = 0; i < listCart.length; i++) {
      const cart = await Cart.findOne({
        where: { userId, id: listCart[i] },
      });
      const product = await Product.findOne({
        where: { id: cart.productId },
      });
      console.log(product.price, cart.quantity);
      let totalPrice = product.price * cart.quantity;
      const orderItem = await OrderItem.create({
        orderId: newOrder.id,
        productId: cart.productId,
        quantity: cart.quantity,
        price: totalPrice,
      });
      console.log(orderItem);
      totalAmount += product.price * cart.quantity;

      // 3. Menghapus cart
      cart.destroy();
    }

    // 4. Mengupdate total amount
    newOrder.total = totalAmount;
    await newOrder.save();

    return res.status(201).json({
      status: 201,
      message: "Order created successfully",
      data: {
        order: newOrder,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// update order
const updateOrder = async (req, res) => {
  const { userId, status } = req.body;
  const orderId = req.params.orderId;
  try {
    const order = await Order.findOne({
      where: { userId, id: orderId },
    });
    if (order) {
      order.status = status;
      await order.save();
      return res.status(200).json({
        status: 200,
        message: "Order updated successfully",
        data: order,
      });
    } else {
      return res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// delete order
const deleteOrder = async (req, res) => {
  const { userId } = req.body;
  const orderId = req.params.orderId;
  try {
    const order = await Order.findOne({
      where: { userId, id: orderId },
    });
    if (order) {
      await order.destroy();
      return res.status(200).json({
        status: 200,
        message: "Order deleted successfully",
      });
    } else {
      return res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderByUser,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
