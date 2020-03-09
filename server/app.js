const express = require("express");
const bodyParser = require('body-parser');

// const mongoConnect = require('./util/database');
const mongoose = require("mongoose");
// const User = require('./models/user.model');
const usersRoute = require("./routes/api/users.route");
const db = require("./config/keys").mongoURI;

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.json());
app.use("/api/users", usersRoute)

const PORT = process.env.port || 4000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));


