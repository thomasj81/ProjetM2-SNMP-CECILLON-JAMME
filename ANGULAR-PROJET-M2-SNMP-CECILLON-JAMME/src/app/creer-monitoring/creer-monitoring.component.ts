import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResearchBDDService } from '../services/research-bdd.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-creer-monitoring',
  templateUrl: './creer-monitoring.component.html',
  styleUrls: ['./creer-monitoring.component.scss']
})
export class CreerMonitoringComponent implements OnInit {

  tableauEquipements: [];
  tableauOIDS: [];
  error = '';
  formulaireMonitoring: FormGroup; // Déclaration d'un formulaire

  constructor(private fb: FormBuilder, private monitoring: ResearchBDDService, private router: Router) { }



  ngOnInit() {

    // Utilise la fonction getEquipements contenu dans services/research-bdd.service.ts
    this.monitoring.getEquipements().subscribe((data: []) => {
      console.log(data);
      this.tableauEquipements = data;
      console.log(this.tableauEquipements);
    });

    // Utilise la fonction getOIDS contenu dans services/research-bdd.service.ts
    this.monitoring.getOIDS().subscribe((data: []) => {
      console.log(data);
      this.tableauOIDS = data;
      console.log(this.tableauOIDS);
    });

    // Déclaration de la structure du formulaire avec un champ oid et equipement
    this.formulaireMonitoring = this.fb.group({

      oid: [this.tableauOIDS],
      equipement: [this.tableauEquipements],

    })


  }


  // Envoi du formulaire
  envoyerMonitoring() {

    console.log(this.formulaireMonitoring.value);

    // Utilise la fonction setMonitoring contenu dans services/research-bdd.service.ts
    this.monitoring.setMonitoring(this.formulaireMonitoring)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.error = error;
        });
    this.router.navigate(['/oidsequipement/' + this.formulaireMonitoring.get('equipement').value]); // Redirection vers /oidsequipement/ + la valeur contenu dans le champ equipement
  }

}
