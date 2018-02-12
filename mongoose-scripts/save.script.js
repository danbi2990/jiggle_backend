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
  shouldFocusMarked: true
});

temp.save(function(err, t, cnt) {
  if (err) throw new Error("Save Failed.");
  console.log(`${config.padding}${t.name}(id: ${t.id}) saved.`);
  // db.connection.disconnect();
  mongoose.connection.close(function() {
    console.log(`${config.padding}DB Connection Closed. (from Script)`);
  });
});
