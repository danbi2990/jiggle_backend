const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  id: Number,
  name: String,
  indexToFocus: Array,
  gif: String,
  shouldFocusMarked: Boolean,

  rawData: Array,
  width_svg: Number,
  height_svg: Number,
  margins: {
    top: Number,
    bottom: Number,
    left: Number,
    right: Number
  },

  focusType: String,
  duration: Number,
  delay: Number,
  accumedDelay: Number,
  easing: String,
  delayType: String,

  backgroundColor: String,
  paddingBtwRects: Number,
  radius: Number,
  unit: String,
  color: String,
  colorToFocus: String,
  opacity: Number,
  opacityToHide: Number
});

module.exports = mongoose.model("Template", templateSchema);
