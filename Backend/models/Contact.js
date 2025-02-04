const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  enquiry: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
