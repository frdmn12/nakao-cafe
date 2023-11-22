const express = require("express");
const app = express();
const {productRouter} = require('./routers')

const port = 8000;

app.get("/", (req, res) => {
  res.send("BackEnd Nakoa Coffe Shop");
});

app.use('/products',productRouter )


app.listen(port, () => {
  console.log(`Port Active on @${port}`);
});
