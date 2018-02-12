const mongoose = require("mongoose");
const config = require("../../config");
const Template = require("../../models/Template");

describe("# Mongoose - model", function() {
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
  describe("## save()", function() {
    const template = new Template({
      id: 1,
      name: "Single Sequence Bar",
      indexToFocus: [-1, -1],
      gif: "../../gif/sample1.gif",
      shouldFocusMarked: true
    });
    it("should save a model.", function(done) {
      template.save(done);
    });
  });

  describe("## find()", () => {
    it("should find a model.", function(done) {
      const query = Template.find({ name: "Single Sequence Bar" });
      query.exec((err, docs) => {
        docs[0].name.should.equal("Single Sequence Bar");
        done();
      });
    });
  });
});
