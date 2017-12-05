const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');



var CompSchema = new Schema({
   username: {
    type: String,
    trim: true,
    required: "Company name is Required"
  },
    password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `date` must be of type Date. The default value is the current date
  CompCreated: {
    type: Date,
    default: Date.now
  }
});

var compName = mongoose.model("compName", CompSchema);

// Export the User model
module.exports = compName;
