const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const user_controller = require("./controllers/tempusers");

// To develop if there
// const jwt = require("jsonwebtoken");
// const cors = require("cors");

const PORT = process.env.PORT;
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
// mongoose.set("useFindAndModify", false);

app.use(
  express.urlencoded({
    extended: true,
  })
);
// Set up connection to mongo db
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("successfully connected");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// open the connection to mongo
mongoose.connection.on("open", () => {});

// register route
app.post("/users/register", user_controller.register);
//  login route
app.post("/users/login", user_controller.login);
