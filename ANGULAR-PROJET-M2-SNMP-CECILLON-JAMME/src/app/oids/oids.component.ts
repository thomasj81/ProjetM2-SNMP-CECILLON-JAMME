import { Component, OnInit } from '@angular/core';
import { ResearchBDDService } from '../services/research-bdd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oids',
  templateUrl: './oids.component.html',
  styleUrls: ['./oids.component.scss']
})
export class OidsComponent implements OnInit {

  idEquipement;
  tableauOIDS: [];

  constructor(private oids: ResearchBDDService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // Permet de récupérer le paramètre idEquipement dans l'URL
    this.idEquipement = this.route.snapshot.paramMap.get('idEquipement');
    console.log(this.idEquipement);

    // Utilise la fonction getOIDSEquipement contenu dans services/research-bdd.service.ts
    this.oids.getOIDSEquipement(this.idEquipement).subscribe((data: []) => {
      console.log(data);
      this.tableauOIDS = data;
      console.log(this.tableauOIDS);
    });

  }

  // Redirection vers /logsoid avec les paramètres idEquipement et idOID dans l'URL
  onClickOID(idOID, idEquipement) {
    this.router.navigate(['/logsoid', idEquipement, idOID]);
  }

  // Redirection vers /creeroids
  onClickCreation() {
    this.router.navigate(['/creeroids']);
  }

}
