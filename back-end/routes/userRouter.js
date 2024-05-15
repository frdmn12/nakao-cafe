const express = require("express");
const router = express.Router();
const db = require("../config");
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../handlers/validator");
const { user_signup, user_signin, test } = require("../controllers/userController");


router.post("/login", user_signin);
// router.post("/login", (req, res) => res.send("Login Success"));
router.post("/register", validateSignupRequest, user_signup);

module.exports = router;
