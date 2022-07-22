const router  = require ('./routes/users.js');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();


const PORT = process.env.PORT||5001;
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;


app.use(
  express.urlencoded({
    extended: true,
  })
);

//app.use('/', router);
app.get('/',(req,res)=> res.send('Hello from Homeplace'));

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
