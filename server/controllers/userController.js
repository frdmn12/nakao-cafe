require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../db/models/user"); // Ubah nama variabel ini

const generateToken = (payload) => {
  return jwt.sign({ payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// signup
const signup = async (req, res) => {
  const body = req.body;

  try {
    const newUser = await User.create({ // Ubah nama variabel ini
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role,
    });

    const token = generateToken({
      id: newUser.id, // Ubah nama variabel ini
      email: newUser.email, // Ubah nama variabel ini
      role: newUser.role, // Ubah nama variabel ini
    });
    return res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
};