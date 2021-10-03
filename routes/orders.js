const express = require("express");
const { Order } = require("../models/orders");

let router = express.Router();

//get products
router.get("/:id", async (req, res) => {
  let orders = await Order.findById(req.params.id);
  return res.send(orders);
});
router.put("/:id", async (req, res) => {
  let orders = await Order.findOneAndUpdate(
    {
      "UserId._id": req.params.id,
    },
    { $set: { "UserId.$.status": req.body.status } }
  );

  return res.send(orders);
});
//postproducts
router.post("/:id", async (req, res) => {
  let findorder = await Order.findById(req.params.id);
  if (!findorder) {
    let orders = new Order();
    orders._id = req.params.id;
    orders.UserId = req.body;
    await orders.save();
    return res.send(orders);
  } else {
    findorder.UserId.push(req.body);
    await findorder.save();
    return res.send(findorder);
  }
});

module.exports = router;
