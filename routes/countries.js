var express = require("express");
var router = express.Router();
var db = require("../models/index");

router.get("/", async function (req, res, next) {
  res.json(await db.Country.findAll());
});


module.exports = router;
