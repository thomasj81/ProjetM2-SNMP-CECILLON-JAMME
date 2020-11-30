var sql = require('./database.js');
module.exports = { getMonitoring, setLog, getEquipements, getOIDS, getOIDSEquipement, getLogs, postEquipement, postOID, postMonitoring };

// Récupère les Equipements enregistrer et les OIDS associés pour le monitoring.
function getMonitoring() {
  return new Promise((resolve, reject) => {
    sql.query("SELECT id_Equipement,Nom_Equipement,IP,Communaute,Version_SNMP,OID.id_OID, OID.Numero FROM Equipement INNER JOIN Monitoring ON Equipement.id_Equipement = Monitoring.fk_id_Equipement INNER JOIN OID ON OID.id_OID=Monitoring.fk_id_OID ORDER BY Equipement.`Nom_Equipement` ASC", function (err, res) {
      if (err) {
        reject(err);
      }
      else {
        resolve(res)
      }
    });
  });
}


// Enregistre une log en fonction d'un id d'équipement et d'un id d'OID sur la BDD.
function setLog(tableauRequetes, tableauLog) {
  console.log(tableauLog);
  console.log(tableauRequetes);
  for (var i = 0; i < tableauRequetes.length && i < tableauLog.length; i++) {
    sql.query("INSERT INTO `Log` (`Message_Log`, `fk_Id_OID`, `fk_Id_Equipement`) VALUES (?,?,?)", [tableauLog[i], tableauRequetes[i].id_OID, tableauRequetes[i].id_Equipement], function (err, res) {
      if (err) {
        console.log("error: ", err);
      }
      else {
        console.log("id de la log :", res.insertId);
      }
    });
  }
}

// Récupère l'ensemble des Equipements enregistrés sur la BDD.
function getEquipements(req, result) {
  sql.query("SELECT `id_Equipement`, `Nom_Equipement`, `IP` FROM `Equipement`", function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans getEquipement');
      console.log(res);*/
      result.send(res);
    }
  });
}

// Récupère l'ensemble des OIDS enregistrés sur la BDD.
function getOIDS(req, result) {
  sql.query("SELECT `Id_OID`, `Numero` FROM `OID`", function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans getOIDS');
      console.log(res);*/
      result.send(res);
    }
  });
}

// Récupère l'ensemble des OIDS associés à un équipement à partir de l'id équipement sur la BDD.
function getOIDSEquipement(req, result) {
  sql.query("SELECT OID.id_OID, OID.Numero FROM Equipement INNER JOIN Monitoring ON Equipement.id_Equipement = Monitoring.fk_id_Equipement INNER JOIN OID ON OID.id_OID=Monitoring.fk_id_OID WHERE Equipement.id_Equipement = ?", [req.params.idEquipement], function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans getOIDS');
      console.log(res);*/
      result.send(res);
    }
  });
}

// Récupère l'ensemble des Logs associées à un OID + un équipement en particulier à partir de leur ID.
function getLogs(req, result) {
  sql.query("SELECT `Date_Log`, `Message_Log` FROM `Log` WHERE `fk_Id_Equipement` = ? AND `fk_Id_OID` = ? ", [req.params.idEquipement, req.params.idOID], function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans getLogs');
      console.log(res);*/
      result.send(res);
    }
  });
}

// Enregistre un équipement sur la BDD.
function postEquipement(req, result) {
  console.log(req.body.formulaireEquipement);
  var formGet = req.body.formulaireEquipement;
  sql.query("INSERT INTO `Equipement`(`Nom_Equipement`, `IP`, `MAC`, `Communaute`, `Version_SNMP`) VALUES (?, ?, ?, ?, ?)", [formGet.Nom_Equipement, formGet.IP, formGet.MAC, formGet.Communaute, formGet.Version_SNMP], function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans postEquipement');
      console.log(res.insertId);*/
      result.send(res);
    }
  });
}

// Enregistre un OID sur la BDD.
function postOID(req, result) {
  console.log(req.body.formulaireOID);
  var formGet = req.body.formulaireOID;
  sql.query("INSERT INTO `OID`(`Numero`) VALUES (?)", [formGet.Numero], function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans postOID');
      console.log(res.insertId);*/
      result.send(res);
    }
  });
}

// Enregistre une ligne de monitoring reliant un OID et un équipement à l'aide de leur ID.
function postMonitoring(req, result) {
  console.log(req.body.formulaireMonitoring);
  var formGet = req.body.formulaireMonitoring;
  sql.query("INSERT INTO `Monitoring`(`fk_Id_OID`, `fk_Id_Equipement`) VALUES (?, ?)", [formGet.oid, formGet.equipement], function (err, res) {
    if (err) {
      result.send(err);
    }
    else {
      /*console.log('passage dans postMonitoring');
      console.log(res.insertId);*/
      result.send(res);
    }
  });
}