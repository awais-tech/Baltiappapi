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
router.put("/:id", async (req, res, next) => {
  try {
    let users = await User.findOneAndUpdate({ Uid: req.params.id }, req.body);
    // if (!users) {
    //   return res.status(400).send({ message: "No user found" });
    // }
    // users[req.body.name] = req.body.value;
    // await users.save();
    return res.status(200).send(users);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let users = await User.findOne({ Uid: req.params.id });
    if (!users) {
      return res.status(400).send({ message: "No user found" });
    }
    return res.status(200).send(users);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = router;
