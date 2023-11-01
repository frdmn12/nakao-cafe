const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("BackEnd Nakoa Coffe Shop");
});

app.listen(port, () => {
  console.log(`Port Active on @${port}`);
});
