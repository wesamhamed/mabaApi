var express = require("express");
var router = express.Router();
var db = require("../models/index");

router.get("/", async function (req, res, next) {
  res.json(await db.Order.findAll());
});

router.get("/:id", async function (req, res, next) {
    res.json(await db.Order.findAll({ where: { id: req.params.id } }));
  });

router.get("/user/:id", async function (req, res, next) {
  res.json(await db.Order.findAll({ where: { UserId: req.params.id } }));
});

router.post("/create", async function (req, res, next) {
    res.json(await db.Order.create(req.body));
});

module.exports = router;
