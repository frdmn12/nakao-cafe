require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const path = require("path");

let corsOptions = {
  origin: "http://localhost:8081",
};

// Routes
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");

app.use(cors(corsOptions)); // agar bisa diakses oleh semua domain
app.use(morgan("dev")); // log request ke console
app.use(express.json()); // agar bisa membaca json
app.use(express.urlencoded({ extended: true })); // agar bisa membaca data dari form
app.use('/public', express.static(path.join(__dirname, 'public'))); // agar bisa mengakses file di folder public
// app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my nakao API",
  });
});

// routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something broke!",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
