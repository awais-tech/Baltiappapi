const express = require("express");
const { Order } = require("../models/orders");

let router = express.Router();

//get products
router.get("/", async (req, res) => {
  let orders = await Order.find();
  return res.send(orders);
});

//postproducts
router.post("/", async (req, res) => {
  let orders = new Order(req.body);
  await orders.save();
  return res.send(orders);
});

module.exports = router;
