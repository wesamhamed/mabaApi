var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var users = await db.User.findAll();
  res.json(users);
});

router.get("/:id", async function (req, res, next) {
  var user = await db.User.findByPk(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  var user = await db.User.create(req.body);
  res.json(user);
});

router.put("/", async (req, res) => {
  var user = await db.User.update(req.body, { where: { id: req.body.id } });
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  var user = await db.User.destroy({ where: { id: req.params.id } });
  res.json(user);
});


module.exports = router;
