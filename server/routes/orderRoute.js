const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getOrderByUser,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { route } = require("./cartRoute");



router.route("/").get(getAllOrders);
router.route("/create-order").post(createOrder);
router.route("/get-order/:userId").get(getOrderByUser);
router.route("/get-order/:orderId").get(getOrderById);
router.route("/update-order/:orderId").put(updateOrder);
router.route("/delete-order/:orderId").delete(deleteOrder);

module.exports = router;
