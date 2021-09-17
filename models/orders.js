var mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  amount: String,
  dateTime: String,
  products: {
    type: mongoose.Schema({
      id: String,
      title: String,
      quantity: Number,
      price: Number,
    }),
  },
});
var Order = mongoose.model("Order", orderSchema);

module.exports.Order = Order;
