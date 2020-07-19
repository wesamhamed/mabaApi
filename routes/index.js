var express = require('express');
var router = express.Router();
var db =require("../models/index");
var auth =require("../helpers/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register",(req,res,next)=>{
  var {password} =req.body;
  req.body.password = auth.hashPassword(password)
  db.User.create(req.body).then((result)=>{
    res.json(auth.getToken({email:result.email}));
  }).catch(err=>{
    res.json(err.errors[0].message)
  })

})
router.post("/login",(req,res,next)=>{
  const {password,email}=req.body;
  db.User.findOne({where:{email}}).then(result=>{
    if(result && auth.comparePassword(password,result.password)){
      res.json(auth.getToken({email:result.email}))
    }else{

      res.status(400).json("User is not found");
    }
  })
})

module.exports = router;
