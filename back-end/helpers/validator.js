const { validationResult, check, body } = require("express-validator");
const { query } = require("../config");

const checkLogin = [
  check("email")
    .exists()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Must be a valid email"),
  check("password")
    .exists()
    .withMessage("Password field is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const checkRegister = [
  // Check if 'email' field exists and is a valid email
  check("email")
    .isEmail()
    .withMessage("Must be a valid email")
    .exists()
    .withMessage("Email field is required"),
  check("password")
    .exists()
    .withMessage("Password field is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 8 characters long"),
  check("name")
    .exists()
    .withMessage("Name field is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check Email is exist in database
    let checkEmail = `SELECT * FROM users WHERE email = "${req.body.email}"`;
    const data = await query(checkEmail);

    if (data.length > 0) {
      return res.status(400).json({ errors: "Email already exist" });
    }
    next();
  },
];

module.exports = {
  checkRegister,
  checkLogin,
};
