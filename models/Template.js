const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  id: Number,
  name: String,
  indexToFocus: Array,
  gif: String,
  shouldFocusMarked: Boolean
});

module.exports = mongoose.model("Template", templateSchema);
