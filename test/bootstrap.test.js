// const http = require("http");
// const mongoose = require("mongoose");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
// const app = require("../app");
// const config = require("../config");
// const server = http.createServer(app);
chai.should();
chai.use(chaiAsPromised);

// before(function() {
//   server.on("close", function() {
//     console.log("Server closed.");
//   });
//   server.listen(3004);
// });

// after(function(done) {
//   mongoose.connection.db.dropDatabase(function() {
//     mongoose.connection.close(function() {
//       server.close();
//       done();
//     });
//   });
// });

// before(function(done) {
//   console.log("DB Before Hook");
//   if (mongoose.connection.readyState === 1) done();
//   mongoose.connect(config.mongo_uri, config.mongo_options, done);
// });

// after(function(done) {
//   console.log("DB After Hook");
//   mongoose.connection.db.dropDatabase(function() {
//     mongoose.connection.close(function() {
//       done();
//     });
//   });
// });
