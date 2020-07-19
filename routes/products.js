var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* GET products listing. */
router.get("/", async function (req, res, next) {
  var products = await db.Product.findAll({include:{model:db.Category,attributes:["name"]}});
  res.json(products);
});

router.get("/:id", async function (req, res, next) {
  var product = await db.Product.findByPk(req.params.id,{
    include:{model:db.Category}
  });
  res.json(product);
});

router.post("/", async (req, res) => {
  var product = await db.Product.create(req.body);
  res.json(product);
});

router.put("/", async (req, res) => {
  var product = await db.Product.update(req.body, { where: { id: req.body.id } });
  res.json(product);
});

router.delete("/:id", async (req, res) => {
  var product = await db.Product.destroy({ where: { id: req.params.id } });
  res.json(product);
});


module.exports = router;
