const express = require("express");
const app = express();
const cors = require("cors");
const { productRouter, userRouter, cartRouter } = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.static('public'));
// app.use(express.static(__dirname, 'public'));
// app.use(multer({storage: storage, fileFilter: fileFilter}).single('image'));
const port = 3001;


// Base request api
app.get("/", (req, res) => {
  res.send("BackEnd Nakoa Coffe Shop");
});

// Routers
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use('/carts', cartRouter);

// this is default in case of unmatched routes
app.use(function(req, res) {
  // Invalid request
        res.status(404).json({
          error: {
            'name':'Error',
            'status':404,
            'message':'Invalid Request',
            'statusCode':404,
            'stack':`http://localhost:${port}/` // 
          },
           message: 'Testing!'
        });
});


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
