var snmp = require("net-snmp");
module.exports = { getSNMP };
var y = 0;
var tableauLog = [];

// Permet d'effectuer des requêtes SNMP avec comme paramètres : @IP cible, Communauté, OID à interroger.
function getSNMP(tableauRequetes) {
  return new Promise((resolve, reject) => {
    for (var x = 0; x < tableauRequetes.length; x++) {
      console.log('taille tableau ' + tableauRequetes.length);
      var session = snmp.createSession(tableauRequetes[x].IP, tableauRequetes[x].Communaute);
      var oids = [tableauRequetes[x].Numero];


      session.get(oids, function (error, varbinds) {

        if (error) {
          console.error(error);
          reject(error);
        } else {

          if (snmp.isVarbindError(varbinds[0])) {
            console.error(snmp.varbindError(varbinds[0]));
            reject(snmp.varbindError(varbinds[0]));
          } else {
            tableauLog[y] = ('' + varbinds[0].value); // Cette ligne permet d'insérer dans le tableau la réponse obtenu lors de l'interrogation de l'OID.
            if (y + 1 == tableauRequetes.length) {
              resolve(tableauLog);
            }
          }

        }

        y += 1;
      });

      session.trap(snmp.TrapType.LinkDown, function (error) {
        if (error)
          console.error(error);
      });
    }
    y = 0;
  });
}

