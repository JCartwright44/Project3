const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  counting: { type: Number},
  addition: { type: Number},
  subtraction: { type: Number},
  multiplication: { type: Number},
  division: { type: Number},
});

const User = mongoose.model("User", userSchema);

module.exports = User;