const express = require("express");
const { Product } = require("../models/product");
let router = express.Router();

//get products
router.get("/", async (req, res) => {
  let products = await Product.find();

  return res.send(products);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  let product = new Product(req.body);
  await product.save();
  return res.send(product);
});
router.put("/:id", async (req, res) => {
  let product = Product.findOneAndUpdate(req.params.id, req.body);

  return res.status(200).send(product);
});
router.delete("/:id", async (req, res) => {
  let products = await Product.findByIdAndDelete(req.params.id);
  console.log(products, req.params.id);
  return res.status(200).send(products);
});

module.exports = router;
