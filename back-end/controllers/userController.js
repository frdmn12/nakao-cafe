const { query } = require("../config");
const jwt = require("jsonwebtoken");

let secretKey = process.env.JWT_SECRET;

// Sign In User
const user_signin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    // console.log(req.body);

    // return res.status(200).send(`${email} , ${password}`);

    let sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`;

    const data = await query(sql);
    
    // use jwt
    if (data.length > 0) {
      const token = jwt.sign({ email: email, password:password }, secretKey);
    
      res.status(200).json({
        token: token,
      });
    }else {
        res.status(400).send("Invalid email or password");
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
};


// Sign Up User
const user_signup = async (req, res) => {
    try {
      let email = req.body.email;
      let password = req.body.password;
  
      let checkEmail = `SELECT * FROM users WHERE email = "${email}"`;
      let sql = `INSERT INTO users (email, password) VALUES ("${email}", "${password}")`;
  
      const checkEmailData = await query(checkEmail);
      if (checkEmailData.length > 0) {
        return res.status(400).send("Email already exist");
      } else {
        const data = await query(sql);
        return res.status(200).send("User successfully registered");
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

module.exports = {
  user_signup,
  user_signin,
};
