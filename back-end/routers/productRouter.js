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

module.exports = router;
