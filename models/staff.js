const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  jobTitle: { type: String, required: true },
  address: String,
  hireDate: { type: Date, default: Date.now }
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
