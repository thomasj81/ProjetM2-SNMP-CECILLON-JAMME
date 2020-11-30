import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResearchBDDService } from '../services/research-bdd.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-creer-oids',
  templateUrl: './creer-oids.component.html',
  styleUrls: ['./creer-oids.component.scss']
})
export class CreerOidsComponent implements OnInit {

  constructor(private fb: FormBuilder, private oid: ResearchBDDService, private router: Router) { }

  formulaireOID: FormGroup; // Déclaration d'un formulaire
  error = '';


  ngOnInit() {

    // Déclaration de la structure du formulaire avec un champ Numero
    this.formulaireOID = this.fb.group({

      Numero: [''],

    })

  }

  // Envoi du formulaire
  envoyerOID() {

    // Si le champ Numero est vide on y insère : 'Non renseigné'
    if (this.formulaireOID.get('Numero').value === '') {
      this.formulaireOID.get('Numero').setValue('Non renseigné');
    }
    console.log(this.formulaireOID.value);

    // Utilise la fonction setOID contenu dans services/research-bdd.service.ts
    this.oid.setOID(this.formulaireOID)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.error = error;
        });
    this.router.navigate(['/creermonitorings']); // Redirection vers /creermonitorings
  }

}
