require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../db/models/user");
const models = require("../db/models");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { // Pastikan menggunakan kunci yang sama
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// signup
const signup = async (req, res) => {
  const body = req.body;

  try {
    // validation apabila email sudah terdaftar
    const isEmailExist = await models.User.findOne({ where: { email: body.email } });
    if (isEmailExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const newUser = await models.User.create({
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role,
    });

    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
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

// login
const login = async (req, res) => {
  const body = req.body;

  try {
    const user = await models.User.findOne({ where: { email: body.email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = bcrypt.compareSync(body.password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const userData = await models.User.findOne({
      where: { email: body.email },
      attributes: { exclude: ["password"] },
    });

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return res.status(200).json({ token: token, userData: userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
