const express = require("express");
const router = express.Router();
const db = require("../api");
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../middleware/validator");

// Sign Up
router.post("/signup", validateSignupRequest, (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  //   Check if email already exist
  let checkEmail = `SELECT * FROM users WHERE email = "${email}"`;
  let sql = `INSERT INTO users (email, password) VALUES ("${email}", "${password}")`;
    db(checkEmail, (err, checkEmail) => {
        if (err) return res.status(500).send(err.message);
        if (checkEmail.length > 0) {
        return res.status(400).send("Email already exist");
        } else {
        db(sql, (err, result) => {
            if (err) return res.status(500).send(err.message);
            return res.status(200).send("User successfully registered");
        });
        }
    });
});

module.exports = router;
