const express = require("express");
const router = express.Router();
const { productController } = require("../controllers");
const authenticateJWT = require("../helpers/auth");
const multer = require("multer");
const { storage } = require("../helpers/multers");

const upload = multer({ storage: storage });

// Get All Product
router.get("/", productController.product_index);

// Get Product by Id
router.get("/:id", productController.product_details);

// Get Product by Category
router.get("/category/:category", productController.product_category);

// Create Product
router.post(
  "/create",
  upload.single("image"),
  productController.product_create
);

// Delete Product
router.delete("/:id", productController.product_delete);

module.exports = router;
