const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  id: Number,
  name: String,
  gif: String,
  dataExample: Array
});

module.exports = mongoose.model("Template", templateSchema);
