const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  gender: { type: String },
  age: { type: Number },
  smoke: { type: String },
  drink: { type: String },
  exercise: { type: String },
  diet: { type: String },
  expiration: { type: Number }
});

//bcrypt code to hash password

console.log('loading here 3')

UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(timestamps);
const User = mongoose.model("User", UserSchema);

console.log('loading here 6')
module.exports = User;