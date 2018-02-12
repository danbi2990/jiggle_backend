const mongoose = require("mongoose");
const config = require("../../config");
/*
host, port, name
db.name, mongoose.connection.name, mongoose.connections[0].name
 */
describe("# Mongoose - db info", function() {
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
  describe("## connection.name", function() {
    it("should check if db name is jiggle", function() {
      mongoose.connection.name.should.equal("jiggle");
    });
  });
  describe("## connection.host", function() {
    it("should check if host name is localhost", function() {
      mongoose.connection.host.should.equal("localhost");
    });
  });
  describe("## connection.port", function() {
    it("should check if port number is 27017", function() {
      mongoose.connection.port.should.equal(27017);
    });
  });
});
