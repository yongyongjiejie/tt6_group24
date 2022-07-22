const router  = require ('./routes/users.js');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const user_controller = require("./controllers/tempusers");
const cors = require('cors');

// To develop if there
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
const userRoute = require('./controllers/users');


const PORT = process.env.PORT||5001;
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;


app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/api/users',userRoute);

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
