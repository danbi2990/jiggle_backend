const mongoose = require("mongoose");
const config = require("../../config");
// const chai = require("chai");
// chai.should();
/*
Connection ready state

0 = disconnected
1 = connected
2 = connecting
3 = disconnecting
 */
describe("# Mongoose - connection", function() {
  before(function(done) {
    if (mongoose.connection.readyState === 1) {
      console.log("DB not closed from somewhere.");
      done();
    }
    mongoose.connect(config.mongo_uri, config.mongo_options, function() {
      done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(function() {
        done();
      });
    });
  });
  describe("## connect()", function() {
    it("should check if readyState is 1.", function() {
      mongoose.connection.readyState.should.equal(1);
    });
  });
});
