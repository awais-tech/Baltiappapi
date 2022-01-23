var mongoose = require("mongoose");

var Category = mongoose.Schema({
  Cat: String,
});

var Categorys = mongoose.model("Category", Category);

module.exports.Category = Categorys;
