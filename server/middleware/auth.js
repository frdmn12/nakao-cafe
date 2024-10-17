const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    // Pastikan menggunakan kunci yang sama
    if (err) {
      console.log(token);
      return res.status(401).json({
        isAuthenticated: false,
        message: "Invalid token",
      });
    }
    req.user = user; // user berisi payload yang sama dengan yang di-generate
    next();
  });
};

module.exports = { authenticateToken };
