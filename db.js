const mongoose = require("mongoose");
const config = require("./config");
const db_server = process.env.DB_ENV || "Primary DB";

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

mongoose.connection.on("connected", function(ref) {
  console.log(`${config.padding}${db_server} Connected.`);
});

mongoose.connection.on("error", function(err) {
  console.error("Failed to connect to DB " + db_server + " on startup ", err);
});

mongoose.connection.on("disconnected", function() {
  console.log(`${config.padding}${db_server} Closed.`);
});

mongoose.connect(config.mongo_uri, config.mongo_options);
mongoose.Promise = global.Promise;

const gracefulExit = function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection with DB :" +
        db_server +
        " is disconnected through app termination"
    );
    process.exit(0);
  });
};

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);

module.exports = mongoose;
