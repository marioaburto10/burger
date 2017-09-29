// bring in dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// get route for index route that will redirect to /burgers route
router.get('/', function (req, res){
  res.redirect('/burgers');
});

// get route that will get all burger instances from the db once /burgers is hit
router.get('/burgers', function(req, res){
  // express callback response by calling burger.selectAll function
  burger.selectAll(function(data){
    // console.log(data);
    // wrapper for orm.js that is using MySQL query callback will return data from the db, render the index file with handlebars
    res.render('index', {burgers: data});
  });
});

// post route to create a new burger instance in the db
router.post('/burgers/create', function(req, res){
  // takes the request object using it as input for buger.insertOne
  burger.insertOne([req.body.burgerInput], function(){
    // redirect back to /burgers route once complete
    res.redirect('/burgers');
  });

});

// put route that will update the burger's eaten value to a 1 or a 0
router.put('/burgers/update/:id', function(req, res){
  // passing in the value from the input field located in the body object and also the ID of the burger that was passed in as a parameter
  console.log(req.body.devoured);
  console.log(req.params.id);
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    // redirect back to /burger route when complete
    res.redirect('/burgers');
    // res.send("burger has been eaten");
  });
});

// delete route that will delete a burger from the db
router.delete('/burgers/delete', function(req, res){
  console.log(req.body.delete);
  // passing in the ID of the burger to be deleted from the input field, located in the body object
  burger.deleteOne([req.body.delete], function(){
    // redirect back to /burger route when complete
    res.redirect('/burgers');
  });
});

// export routes to use in server.js
module.exports = router;