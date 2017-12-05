const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var productSchema = new Schema({
   username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
    description: {
    type: String,
  },
  // `date` must be of type Date. The default value is the current date
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

var Product  = mongoose.model("Product", productSchema);

// Export the User model
module.exports = Product;
