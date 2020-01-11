var mysql = require("mysql");

var connMySQL = function() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "virtual_store"
  });
};

module.exports = function() {
  return connMySQL;
};
