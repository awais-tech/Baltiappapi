const express = require("express");
const { UserFav } = require("../models/fav");
let router = express.Router();

router.get("/:id", async (req, res) => {
  let fav = await UserFav.findOne({ Uid: req.params.id });

  return res.send(fav);
});

router.post("/:id", async (req, res) => {
  let findfav = await UserFav.findOne({ Uid: req.params.id });

  if (!findfav) {
    let fav = new UserFav();
    fav.Uid = req.params.id;
    fav.Fav = req.body;
    await fav.save();
    return res.send(fav);
  } else {
    let findfav = await UserFav.findOne({ "Fav._id": req.body.id });
    if (findfav) {
      let fav = await UserFav.findOneAndUpdate(
        {
          "Fav._id": req.body.id,
        },
        { $set: { "Fav.$.status": req.body.status } }
      );
      return res.send(fav);
    } else {
      findfav.Fav.push(req.body);
      await findfav.save();
      return res.send(findfav);
    }
  }
});
module.exports.UserFav = router;
