var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  Uid: String,
  Phoneno: String,
  Password: String,
  role: {
    type: String,
    default: "user",
  },
});

var User = mongoose.model("User", userSchema);

module.exports.User = User;
