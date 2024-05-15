const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });
const util = require("util");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

const query = util.promisify(db.query).bind(db);

module.exports = { query };
