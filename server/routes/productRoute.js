const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, deleteProduct, editProduct } = require('../controllers/productController');

router.route('/get-all').get(getAllProducts);
router.route('/add').post(addProduct);
router.route('/delete/:id').delete(deleteProduct);
router.route('/edit/:id').put(editProduct);

module.exports = router;