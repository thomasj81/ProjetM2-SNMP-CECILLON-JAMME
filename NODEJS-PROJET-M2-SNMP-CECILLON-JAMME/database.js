var mysql = require('mysql');

//connexion à la BDD
var connection = mysql.createConnection({
  database: 'PROJET_SNMP',
  host: "localhost",
  user: "root",
  password: "root"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
