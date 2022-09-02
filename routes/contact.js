var express = require('express');
var contactModel = require('../model/contact')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  contactModel.find(function(err,response){
    res.render('contact', {Messages: response});
  })
});

router.post('/addMsg', function(req,res,next){
  let newMsg = new contactModel({
    name:req.body.name,
    surname:req.body.surname,
    message:req.body.message
  });
  newMsg.save(()=>{
    res.redirect('/contact')
  })
})


module.exports = router;
