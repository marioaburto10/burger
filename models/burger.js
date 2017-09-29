// bring in our custom made orm 
var orm = require('../config/orm.js');

// create and export CRUD functions to use with our ORM and to later use with controller routes
var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res){
      cb(res);
    });
  },
  insertOne: function (val, cb) {
    orm.insertOne('burgers', 'burger_name', val, function(res){
      cb(res);
    });
  },
  updateOne: function (colVal, conditionVal, cb) {
    orm.updateOne('burgers', 'devoured', colVal, 'ID', conditionVal, function(res){
      cb(res);
    });
  },
  deleteOne: function (conditionVal ,cb) {
    orm.deleteOne('burgers', 'ID', conditionVal, function(res){
      cb(res);
    });
  }
};

module.exports = burger;