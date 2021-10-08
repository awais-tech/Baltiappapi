var express = require("express");
const { User } = require("../models/user");
var router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let user = new User(req.body);
    await user.save();
    return res.status(200).send(user);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let users = await User.findById(req.params.id);
    return res.status(200).send(users);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = router;
