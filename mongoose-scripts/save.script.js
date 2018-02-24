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
    name: "Single Focus Bar",
    gif: "/gif/single-bar-chart.gif",
    dataExample: []
  }),
  new Template({
    id: 2,
    name: "Single Not Focus Bar",
    gif: "",
    dataExample: []
  }),
  new Template({
    id: 3,
    name: "Horizontal Single Focus Bar",
    gif: "",
    dataExample: []
  }),
  new Template({
    id: 4,
    name: "Horizontal Single Not Focus Bar",
    gif: "",
    dataExample: []
  }),
  new Template({
    id: 5,
    name: "Grouped Bar",
    gif: "",
    dataExample: []
  }),
  new Template({
    id: 6,
    name: "Small Data Line",
    gif: "",
    dataExample: []
  }),
  new Template({
    id: 7,
    name: "Large Data Line",
    gif: "",
    dataExample: []
  })
];

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
