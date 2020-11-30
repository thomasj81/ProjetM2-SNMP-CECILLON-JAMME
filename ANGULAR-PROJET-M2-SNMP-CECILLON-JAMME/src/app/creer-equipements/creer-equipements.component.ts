import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResearchBDDService } from '../services/research-bdd.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-creer-equipements',
  templateUrl: './creer-equipements.component.html',
  styleUrls: ['./creer-equipements.component.scss']
})
export class CreerEquipementsComponent implements OnInit {

  constructor(private fb: FormBuilder, private equipement: ResearchBDDService, private router: Router) { }


  formulaireEquipement: FormGroup; // Déclaration d'un formulaire
  error = '';

  ngOnInit() {

    // Déclaration de la structure du formulaire avec un champ Nom_Equipement, IP, MAC, Communaute, Version_SNMP
    this.formulaireEquipement = this.fb.group({

      Nom_Equipement: [''],

      IP: [''],

      MAC: [''],

      Communaute: [''],

      Version_SNMP: [''],

    })

  }

  // Envoi du formulaire
  envoyerEquipement() {

    // Si le champ Nom_Equipement est vide on y insère : 'Non renseigné'
    if (this.formulaireEquipement.get('Nom_Equipement').value === '') {
      this.formulaireEquipement.get('Nom_Equipement').setValue('Non renseigné');
    }
    console.log(this.formulaireEquipement.value);

    // Utilise la fonction setEquipement contenu dans services/research-bdd.service.ts
    this.equipement.setEquipement(this.formulaireEquipement)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.error = error;
        });
    this.router.navigate(['/equipements']); // Redirection vers /equipements
  }

}
