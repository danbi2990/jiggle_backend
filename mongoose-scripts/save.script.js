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

const templates = [
  new Template({
    id: 1,
    name: "Single Bar",
    gif: "/gif/single-bar-chart.gif",
    shouldFocusMarked: true,
    rawData: [],
    unit: ""
  }),
  new Template({
    id: 2,
    name: "Line",
    gif: "./gif/line-chart.gif",
    rawData: [],
    unit: ""
  })
];

const bar = new Template({
  id: 1,
  name: "Single Bar",
  gif: "/gif/single-bar-chart.gif",
  shouldFocusMarked: true,
  rawData: [],
  unit: ""
});

const line = new Template({
  id: 2,
  name: "Line",
  gif: "./gif/line-chart.gif",
  rawData: [],
  unit: ""
});

Template.insertMany(templates, function(err, docs) {
  if (err) throw new Error("Save Failed.");
  if (docs) {
    docs.forEach((d, i) => {
      console.log(`${config.padding}${d.name}(id: ${d.id}) saved.`);
    });
  }
  // db.connection.disconnect();
  mongoose.connection.close(function() {
    console.log(`${config.padding}DB Connection Closed. (from Script)`);
  });
});
