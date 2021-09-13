
const express = require("express");
const { Product } = require("../models/product");
let router = express.Router();


//get products
router.get("/", async (req, res) => {

 
  let products = await Product.find()

  return res.send(products);
});

module.exports = router;
