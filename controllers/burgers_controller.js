var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  burger.selectAll(function(data){
    // console.log(data);
    res.render('index', {burgers: data});
  });
});

router.post('/burgers/create', function(req, res){
  burger.insertOne([req.body.burgerInput], function(){
    res.redirect('/burgers');
  });

});

router.put('/burgers/update/:id', function(req, res){
  console.log(req.body.devoured);
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/burgers');
    // res.send("burger has been eaten");
  });
});

router.delete('/burgers/delete', function(req, res){
  console.log(req.body.delete);
  burger.deleteOne([req.body.delete], function(){
    res.redirect('/burgers');
  });
});

module.exports = router;