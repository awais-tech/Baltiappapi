var mongoose = require("mongoose");

var feedback = mongoose.Schema({
  UID: String,
  OID: String,
  description: String,
  rating: Number,
  owner: String,
});

var feedbacks = mongoose.model("feedback", feedback);

module.exports.feedback = feedbacks;
