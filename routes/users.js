var express = require("express");
const { User } = require("../models/user");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  try {
    let user = new User(req.body);
    await user.save();
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

module.exports = router;
