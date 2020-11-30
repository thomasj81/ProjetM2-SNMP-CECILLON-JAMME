import { Component, OnInit } from '@angular/core';
import { ResearchBDDService } from '../services/research-bdd.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.scss']
})
export class EquipementsComponent implements OnInit {

  tableauEquipements: [];


  constructor(private equipements: ResearchBDDService, private router: Router) { }

  ngOnInit() {

    // Utilise la fonction getEquipements contenu dans services/research-bdd.service.ts
    this.equipements.getEquipements().subscribe((data: []) => {
      console.log(data);
      this.tableauEquipements = data;
      console.log(this.tableauEquipements);
    });

  }


  // Redirection vers /oidsequipement avec le paramètre idEquipement dans l'URL
  onClickEquipement(idEquipement) {
    this.router.navigate(['/oidsequipement', idEquipement]);
  }

  // Redirection vers /creerequipements
  onClickCreation() {
    this.router.navigate(['/creerequipements']);
  }

}
