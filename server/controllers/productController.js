require("dotenv").config();
const Product = require("../db/models/product");
const upload = require("../helper/multerConfig");

// add Product
const addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      const { name, price, description } = req.body;
      const image = req.file ? req.file.path.replace(/\\/g, "/") : null;

      try {
        const newProduct = await Product.create({
          name,
          description,
          price,
          image,
        });

        return res.status(201).json({
          message: "Product created successfully",
          product: newProduct,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
      }
    }
  });
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    console.log(products);
    return res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// get product by id
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

// update / edit product
const editProduct = async (req, res) => {
  upload(req, res, async (err) => {
    const { id } = req.params;
    const { name, price, description, loc_origin, stock_qty, weight, roast_level , grind_option  } = req.body;
    const image = req.file ? req.file.path.replace(/\\/g, "/") : null;
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      try {
        const product = await Product.findByPk(id);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image != null ? image : product.image;
        product.loc_origin = loc_origin;
        product.stock_qty = stock_qty;
        product.weight = weight;
        product.roast_level = roast_level;
        product.grind_option = grind_option;

        await product.save();
        return res
          .status(200)
          .json({ message: "Product updated successfully", product });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
      }
    }
  });
};

// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();
    return res
      .status(200)
      .json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
  getProductById
};
