const express = require("express");
const router = express.Router();
const db = require("../api");

router.get("/", (req, res) => {
  let sql = `select * from products`;
  db(sql, (err, getProduct) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(getProduct);
  });
});

router.get("/drink", (req, res) => {
  let sql = `select p.id, p.name, p.price, p.qty, pc.product_category from products p, product_category pc where p.product_category = pc.id AND pc.product_category = "Drink";`;
  db(sql, (err, getDrink) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(getDrink);
  });
});

router.get("/food", (req, res) => {
  let sql = `select p.id, p.name, p.price, p.qty, pc.product_category from products p, product_category pc where p.product_category = pc.id AND pc.product_category = "Food";`;
  db(sql, (err, getFood) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(getFood);
  });
});



module.exports = router;
