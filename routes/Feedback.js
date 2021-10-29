var express = require("express");
const { feedback } = require("../models/feedback");
var router = express.Router();

/* GET home page. */
router.post("/", async (req, res, next) => {
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
    return res.send({ message: e });
  }
});
router.get("/:id/:check?", async (req, res) => {
  try {
    if (req.params.check == "true") {
      let findfeed = await feedback.find({ owner: req.params.id });
      if (findfeed.length < 1) {
        return res.status(402).send({ message: "No feedback" });
      }
      return res.send(findfeed);
    }

    let findfeed = await feedback.find({ UID: req.params.id });
    if (!findfeed) {
      return res.status(400).send({ message: "No feedback" });
    }
    return res.send(findfeed);
  } catch (e) {
    return res.status(400).send(e);
  }
});
module.exports.feedback = router;