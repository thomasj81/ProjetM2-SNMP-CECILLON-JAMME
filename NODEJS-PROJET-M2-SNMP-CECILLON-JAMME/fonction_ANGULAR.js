module.exports = function (app) {
  var fctBDD = require('./fonction_BDD.js');

  // Pour répondre aux requêtes GET venant d'ANGULAR (Lorsque la requête arrive sur une certaine URL elle lance une certaine fonction associée)
  app.get('/equipements', fctBDD.getEquipements);
  app.get('/oids', fctBDD.getOIDS);
  app.get('/oidsequipement/:idEquipement', fctBDD.getOIDSEquipement);
  app.get('/logsoid/:idEquipement/:idOID', fctBDD.getLogs);

  // Pour s'occuper des requêtes POST venant d'ANGULAR (Lorsque la requête arrive sur une certaine URL elle lance une certaine fonction associée)
  app.post('/creerequipement', fctBDD.postEquipement);
  app.post('/creeroid', fctBDD.postOID);
  app.post('/creermonitoring', fctBDD.postMonitoring);

};