const http = require("http");
const mongoose = require("mongoose");
const rp = require("request-promise-native");
const app = require("../../app");
const config = require("../../config");
const server = http.createServer(app);
const rootUrl = "http://localhost:3004";
const runScript = require("../../util");
const chai = require("chai");
const expect = chai.expect;

describe("# App", function() {
  before(function(done) {
    server.on("listening", function() {
      console.log(`${config.padding}Server On.`);
    });
    server.listen(3004);
    done();
  });
  after(function(done) {
    server.on("close", function() {
      console.log(`${config.padding}Server Closed.`);
      done();
    });
    mongoose.connect(config.mongo_uri, config.mongo_options, function() {
      mongoose.connection.db.dropDatabase(function() {
        mongoose.connection.close(function() {
          server.close();
        });
      });
    });
  });
  describe("## /template", function() {
    it("Status 200 with request module", function() {
      const uri = `${rootUrl}/template`;
      const options = {
        method: "GET",
        uri,
        resolveWithFullResponse: true
      };
      // rp(options).then(function(res) {
      //   // console.dir(res);
      //   return expect(res.statusCode).equal(400);
      // });
      return rp(options).should.eventually.have.property("statusCode");
    });
  });
  describe("## /template/all", function() {
    it("Template list", function() {
      const uri = `${rootUrl}/template/all`;
      const options = {
        uri,
        headers: {
          "User-Agent": "Request-Promise"
        },
        json: true
      };
      return runScript("save.script.js").then(function(result) {
        return rp(options)
          .json()
          .should.eventually.have.lengthOf(1);
      });
    });
  });
  describe("## ", function() {});
});
