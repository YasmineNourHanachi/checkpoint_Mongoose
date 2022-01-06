// require mongoose
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: Number,
});

module.exports = Contact = model("contact", ContactSchema);
