const { query } = require("../config");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const hashPassword = require("../helpers/hash");

let secretKey = process.env.JWT_SECRET;

// Sign In User
const user_signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptedPassword = hashPassword(password);

    // console.log(req.body);

    // return res.status(200).send(`${email} , ${password}`);

    let sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${encryptedPassword}"`;

    const data = await query(sql);

    // use jwt
    if (data.length > 0) {
      const accessToken = jwt.sign(
        { email: email, password: password },
        secretKey,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { email: email, password: password },
        secretKey
      );

      res.status(200).json({
        accessToken,
        refreshToken,
        message: "Login success",
      });
    } else {
      res.status(400).send({ message: "Invalid email or password" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Sign Up User
const user_signup = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    const encryptedPassword = hashPassword(password);

    let sql = `INSERT INTO users (name,email, password) VALUES ("${name}", "${email}", "${encryptedPassword}")`;
    await query(sql);
    return res.status(200).send("User successfully registered");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Logout User
const user_logout = async (req, res) => {
  try {
    // delete token
    localStorage.removeItem("token");
    
    return res.status(200).send("User successfully logged out");
  } catch (err) {
    return res.status(500).send("Failed to logout, please try again later");
  }
};

module.exports = {
  user_signup,
  user_signin,
  user_logout,
};
