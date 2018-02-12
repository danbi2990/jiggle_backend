const mongoose = require("mongoose");
const config = require("../../config");
const Template = require("../../models/Template");
const runScript = require("../../util");

describe("# Script", function() {
  after(function(done) {
    mongoose.connect(config.mongo_uri, config.mongo_options, function() {
      mongoose.connection.db.dropDatabase(function() {
        mongoose.connection.close(function() {
          done();
        });
      });
    });
  });
  describe("## save.script.js", function() {
    it("Find template id=2, name=Single Bar", function(done) {
      // const saveScript = "./mongoose-scripts/save.script.js";
      runScript("save.script.js").then(function() {
        const query = Template.findOne({ name: "Single Bar" });
        query.exec(function(err, doc) {
          if (err) throw new Error("Failed to find template.");
          doc.id.should.equal(1);
          done();
        });
      });
    });
  });
  describe("## remove.script.js", function() {
    it("Remove template docs.", function() {
      const query = Template.find();
      return runScript("remove.script.js")
        .then(function() {
          return query.exec().then(function(template) {
            return template;
          });
        })
        .should.eventually.have.lengthOf(0);
      // .then(function(result) {
      //   return result.should.eventually.have.lengthOf(0);
      // });
      // runScript("remove.script.js").then(function() {
      //   const query = Template.find();
      //   query.exec(function(err, doc) {
      //     doc.should.have.lengthOf(0);
      //   });
      // });
    });
  });
});
