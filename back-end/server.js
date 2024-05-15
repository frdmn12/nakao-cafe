const express = require("express");
const app = express();
const cors = require("cors");
const { productRouter, userRouter } = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'))

const port = 3001;


// Base request api
app.get("/", (req, res) => {
  res.send("BackEnd Nakoa Coffe Shop");
});

// Routers
app.use("/products", productRouter);
app.use("/users", userRouter);


// Listening request
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${port}`);
  }
});
