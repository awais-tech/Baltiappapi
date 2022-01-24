const express = require("express");
const { Resturents } = require("../models/Resturent");
let router = express.Router();

//get Resturentss
router.get("/", async (req, res) => {
  let Resturentss = await Resturents.find();

  return res.send(Resturentss);
});

router.get("/:id", async (req, res) => {
  try {
    let Resturentss = await Resturents.find({ createdby: req.params.id });

    return res.send(Resturentss);
  } catch (e) {
    return res.send({ errormessage: "no record found" });
  }
});

router.post("/", async (req, res) => {
  let Resturentss = new Resturents(req.body);
  await Resturentss.save();
  return res.send(Resturentss);
});
router.put("/:id", async (req, res) => {
  let Resturentss = await Resturents.findOneAndUpdate(req.params.id, req.body);

  return res.status(200).send(Resturentss);
});
router.delete("/:id", async (req, res) => {
  let Resturentss = await Resturents.findByIdAndDelete(req.params.id);

  return res.status(200).send(Resturentss);
});

module.exports.Resturent = router;
