var express = require("express");
var router = express.Router();
var db = require("../models/index");
/* GET home page. */
router.post("/add", async function (req, res, next) {
  var cart = await db.Cart.create(req.body);
  res.json(cart);
});

router.get("/:id", async (req, res) => {
  var cart = await db.User.findAll({
    where: { id: req.params.id },
    include : {model : db.Product , through: { attributes: ['count'] }}
  }
 
  );
  res.json(cart);
});

module.exports = router;
