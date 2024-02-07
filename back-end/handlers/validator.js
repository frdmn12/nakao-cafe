const { check } = require("express-validator");

exports.validateSignupRequest = [
  check("email", "Email is required")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more character").isLength({
    min: 6,
  }),
];

exports.validateSigninRequest = [
  check("email", "Email is required").isEmail(),
  check("password", "Password must be 6 or more character").isLength({
    min: 6,
  }),
];
