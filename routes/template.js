var express = require("express");
const Template = require("../models/Template");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/all", function(req, res, next) {
  const query = Template.find();
  query.exec(function(err, docs) {
    if (err) throw new Error(err);
    res.json(docs);
  });
});

module.exports = router;
