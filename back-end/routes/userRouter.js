const express = require("express");
const router = express.Router();
const db = require("../config");
const {
  validateSigninRequest,
  checkRegister,
  checkLogin,
} = require("../helpers/validator");
const { userController } = require("../controllers");
const authenticateJWT = require("../helpers/auth");

router.post("/login", checkLogin, userController.user_signin);
router.post("/register", checkRegister, userController.user_signup);
router.post("/logout", userController.user_logout);
router.get("/protected", authenticateJWT, (req, res) => {
  res.send(401).json({
    message: "This protected Route"
  })
})

module.exports = router;
