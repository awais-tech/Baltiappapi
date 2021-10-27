var mongoose = require("mongoose");

var Feedback = mongoose.Schema({
   UID: { type: String },
        OID: { type: String },
        description: { type: String },
        rating:Number,
        owner:String,
      
        
      }),
  

var feedbacks = mongoose.model("feedback", Feedback);

module.exports.feedback=feedbacks;
