const express = require("express");
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded());

app.use('/', (req, res, next) => {
  res.send('<h1>HELLO THIS IS THE SLASH ROUTE</h1>')
})

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});