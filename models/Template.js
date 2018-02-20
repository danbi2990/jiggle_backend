const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  id: Number,
  name: String,
  gif: String,
  shouldFocusMarked: Boolean,
  rawData: Array,
  unit: String
});

module.exports = mongoose.model("Template", templateSchema);
