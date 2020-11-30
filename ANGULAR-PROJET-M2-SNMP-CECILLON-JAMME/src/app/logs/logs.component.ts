import { Component, OnInit } from '@angular/core';
import { ResearchBDDService } from '../services/research-bdd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  idOID;
  idEquipement;
  tableauLogs: [];

  constructor(private logs: ResearchBDDService, private route: ActivatedRoute) { }

  ngOnInit(){
    // Permet de récupérer les paramètres idOID et idEquipement dans l'URL
    this.idOID = this.route.snapshot.paramMap.get('idOID');
    this.idEquipement = this.route.snapshot.paramMap.get('idEquipement');


    // Utilise la fonction getLogs contenu dans services/research-bdd.service.ts
    this.logs.getLogs(this.idEquipement, this.idOID).subscribe((data: []) => {
      console.log(data);
      this.tableauLogs = data;
      console.log(this.tableauLogs);
    });

  }

}
