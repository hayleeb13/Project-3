const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import bcrypt here

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  gender: { type: String },
  age: { type: Number },
  smoke: { type: String },
  drink: { type: String },
  exercise: { type: String },
  diet: { type: String },
  expiration: { type: Number }
});

//bcrypt code goes here

const User = mongoose.model("User", userSchema);

module.exports = User;