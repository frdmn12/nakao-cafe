require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const app = express();

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions)) // agar bisa diakses oleh semua domain
app.use(morgan("dev")); // log request ke console
app.use(express.json()); // agar bisa membaca json
app.use(express.urlencoded({ extended: true })); // agar bisa membaca data dari form

app.get("/", (req, res) => {
  res.json({
    "message": "Welcome to my nakao API"
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
