var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {

      var query = "SELECT * FROM " + tableInput + ";";
      connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },


create: function(table, cols, vals, cb) {

      var query = "INSERT INTO " + table;
  
      query += " (";
      query += cols.toString();
      query += ") ";
      query += "VALUES (";
      query += ") ";
  
  
      connection.query(query, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },



    update: function(table, objColVals, condition, cb) {
      var query = "UPDATE " + table;
  
      query += " SET ";
      query += objToSql(objColVals);
      query += " WHERE ";
      query += condition;
  
      connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };





  

  module.exports = orm;