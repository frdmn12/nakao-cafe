const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const app = express();
const { productRouter, userRouter } = require("./routers");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

const port = 8000;

app.get("/", (req, res) => {
  res.send("BackEnd Nakoa Coffe Shop");
});

app.use("/products", productRouter);
app.use("/users", userRouter);

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
