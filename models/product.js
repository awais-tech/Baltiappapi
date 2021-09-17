var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  title: String,
  imageUrl: String,

  ResturentName: String,
  Category: String,
  Dilvery: String,
  duration: Number,
  price: Number,
  description: String,
  isFavorite: Boolean,
});
var Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
module.exports.productSchema = productSchema;
