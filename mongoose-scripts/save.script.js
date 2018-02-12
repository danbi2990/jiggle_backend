const mongoose = require("mongoose");
const config = require("../config");
const Template = require("../models/Template");

mongoose.Promise = global.Promise;

// if (mongoose.connection.readyState === 1) {
//   console.log(`${config.padding}DB Already Connected. (from Script)`);
// } else {
//   mongoose.connect(config.mongo_uri, config.mongo_options);
// }

mongoose.connect(config.mongo_uri, config.mongo_options);

const temp = new Template({
  id: 1,
  name: "Single Bar",
  indexToFocus: [-1, -1],
  gif: "/gif/single-bar-chart.gif",
  shouldFocusMarked: true,

  rawData: [],
  width_svg: 400,
  height_svg: 500,
  margins: {
    top: 40,
    bottom: 40,
    left: 30,
    right: 30
  },

  focusType: "",
  duration: 0,
  delay: 1000,
  accumedDelay: 0,
  easing: "easeBackOut",
  delayType: "accumedDelay",

  backgroundColor: "white",
  paddingBtwRects: 0.4,
  radius: 10,
  unit: "",
  color: "#3182bd",
  colorToFocus: "#e6550d",
  opacity: 1,
  opacityToHide: 0.25
});

temp.save(function(err, t, cnt) {
  if (err) throw new Error("Save Failed.");
  console.log(`${config.padding}${t.name}(id: ${t.id}) saved.`);
  // db.connection.disconnect();
  mongoose.connection.close(function() {
    console.log(`${config.padding}DB Connection Closed. (from Script)`);
  });
});
