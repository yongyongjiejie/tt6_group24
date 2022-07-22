const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  email: { type: String, unique: true },
  pwsalt: { type: String, required: true, unique: true },
  hashpw: { type: String, required: true, unique: true },
});

const user_model = mongoose.model("User", userSchema);

module.exports(user_model);
