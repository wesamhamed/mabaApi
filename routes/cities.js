var express = require("express");
var router = express.Router();
var db = require("../models/index");

router.get("/:id", async function (req, res, next) {
  res.json(await db.City.findAll({where : {CountryId : req.params.id}}));
});


module.exports = router;
