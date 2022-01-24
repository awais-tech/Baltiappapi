var mongoose = require("mongoose");

var ResturentSchema = mongoose.Schema({
  Name: String,
  imageUrl: String,

  Location: String,
  description: String,

  createdby: String,
});

var Resturent = mongoose.model("Resturent", ResturentSchema);

module.exports.Resturents = Resturent;
