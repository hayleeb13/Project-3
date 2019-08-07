const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

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

userSchema.plugin(timestamps);
const User = mongoose.model("User", userSchema);

module.exports = User;