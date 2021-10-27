var mongoose = require("mongoose");

var Feedback = mongoose.Schema({
   UID: String ,
  OID:String ,
        description: String ,
        rating:Number,
        owner:String,
      
        
      }),
  

var feedbacks = mongoose.model("feedback", Feedback);

module.exports.feedback=feedbacks;
