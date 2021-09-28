const express = require("express");
const { Order } = require("../models/orders");

let router = express.Router();

//get products
router.get("/", async (req, res) => {
  let orders = await Order.find();
  return res.send(orders);
});
router.put("/:id", async (req, res) => {
  let orders = await Order.findByIdAndUpdate(req.params.id, req.body, {
    upsert: true,
  });
  return res.send(orders);
});
//postproducts
router.post("/", async (req, res) => {
  console.log(req.body);
  let orders = new Order(req.body);
  await orders.save();
  return res.send(orders);
});

module.exports = router;
