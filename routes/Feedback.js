var express = require("express");
const { feedback } = require("../models/feedback");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  let feed = new feedback(req.body);
  await feed.save();
  return res.send(feed);
});

router.get("/", async (req, res, next) => {
  try {
    let feed = await feedback.find();
    if (feed.length < 1) {
      return res.status(400).send({ message: "No feedback" });
    }
    return res.status(200).send(feed);
  } catch (e) {
    return res.send(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    let feed = await feedback.findOne({ OID: req.params.id });
    if (!feed) {
      return res.status(400).send({ message: "No feedback" });
    }
    return res.status(200).send(feed);
  } catch (e) {
    return res.send(e);
  }
});
module.exports.feedback = router;
