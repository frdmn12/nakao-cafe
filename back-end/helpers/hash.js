const crypto = require("crypto");
const hashPasswrord = (password) => {
  return crypto.createHash("sha256", "secret").update(password).digest("hex");
};

module.exports = hashPasswrord;
