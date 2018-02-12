const mongoose = require("mongoose");
const config = require("../config");
const Template = require("../models/Template");

mongoose.connect(config.mongo_uri, config.mongo_options);

Template.remove({}, function(err) {
  if (err) throw new Error("Remove Failed.");
  console.log(`${config.padding}Template Docs Removed.`);
  mongoose.connection.close(function() {
    console.log(`${config.padding}DB Connection Closed. (from Script)`);
  });
});
