const express = require("express");
const bodyParser = require('body-parser');

const mongoConnect = require('./server/util/database');
const User = require('./server/models/user');

const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findById("5e608c8c1c9d440000b84514")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  next();
})

mongoConnect((client) => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
   });
   console.log(client);
})

app.get("/hello", (req, res) => {
  res.send("Hello world");
});