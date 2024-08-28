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
    // validation apabila email sudah terdaftar
    const isEmailExist = await User.findOne({ where: { email: body.email } }); // Ubah nama variabel ini
    if (isEmailExist) {
      return res.status(400).json({ message: "Email already exist" });
    }
    
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

// login
const login = async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findOne({ where: { email: body.email } }); // Ubah nama variabel ini
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = bcrypt.compareSync(body.password, user.password); // Ubah nama variabel ini
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken({
      id: user.id, // Ubah nama variabel ini
      email: user.email, // Ubah nama variabel ini
      role: user.role, // Ubah nama variabel ini
    });
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  signup,
  login
};