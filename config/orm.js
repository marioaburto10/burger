
// Here is the O.R.M. with functions that take inputs and conditions
// and turn them into database commands like SQL.

// bring in connection file
var connection = require('../config/connection.js');

var orm = {
  selectAll: function (table, cb) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // burgerInput is the burger value that we want to save to column
  // and column is where we want to insert the value into
  insertOne: function (table, column, burgerInput, cb) {
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';
    connection.query(queryString, [burgerInput], function(err, result){
      if (err) throw err;
      cb(result);
    });
  },
  // col is the column to be updated, colVal is the new column value that is being passed in
  // condition is the id column, and conditionVal is the burger ID to be updated
  updateOne: function(table, col, colVal, condition, conditionVal, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
    connection.query(queryString, [colVal, conditionVal], function(err, result){
      if (err) throw err;
      cb(result);
    });
  },

  // condition is the id column, and conditionVal is the id of the burger to be deleted.
  deleteOne: function(table, condition, conditionVal, cb) {
     var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '= ?';
    connection.query(queryString, [conditionVal], function(err, result){
      if (err) throw err;
      cb(result);
    });
  }
};

// export orm to use in controller file
module.exports = orm;