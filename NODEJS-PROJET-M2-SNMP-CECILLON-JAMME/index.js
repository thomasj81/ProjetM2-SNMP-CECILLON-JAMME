var express = require('express');
var app = express();
var path = require('path');
var fctBDD = require('./fonction_BDD.js');
var fctSNMP = require('./fonction_SNMP.js');
var routes = require('./fonction_ANGULAR');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

  // Permet d'autoriser tout le monde à se connecter
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Méthode que l'on autorise
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Headers que l'on autorise
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pour inclure les cookies
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware (obligatoire)
  next();
});

// Permet de lancer avec un interval de 5 minutes : getMonitoring puis getSNMP puis setLog.
setInterval(function () {
  fctBDD.getMonitoring().then(
    tableauRequetes => fctSNMP.getSNMP(tableauRequetes).then(
      tableauLog => fctBDD.setLog(tableauRequetes, tableauLog)
    )
  );
}, 300000);

// Pour utiliser les routes définies dans fonction_ANGULAR
routes(app, path);
