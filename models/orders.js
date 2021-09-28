var mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  amount: { type: Number },
  dateTime: { type: String },
  products: [
    {
      type: mongoose.Schema({
        id: String,
        title: String,
        quantity: Number,
        price: Number,
      }),
    },
  ],
  status: { type: String, default: "Pending" },
});
var Order = mongoose.model("Order", orderSchema);

module.exports.Order = Order;
