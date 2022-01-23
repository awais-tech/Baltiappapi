const express = require("express");
const { Category } = require("../models/Category");
let router = express.Router();

//get Categorys
router.get("/", async (req, res) => {
  let Categorys = await Category.find();

  return res.send(Categorys);
});

router.post("/", async (req, res) => {
  let Category = new Category(req.body);
  await Category.save();
  return res.send(Category);
});
router.put("/:id", async (req, res) => {
  let Category = await Category.findOneAndUpdate(req.params.id, req.body);

  return res.status(200).send(Category);
});
router.delete("/:id", async (req, res) => {
  let Categorys = await Category.findByIdAndDelete(req.params.id);

  return res.status(200).send(Categorys);
});

module.exports = router;
