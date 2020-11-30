import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // On récupère la valeur de la variable isAuth contenu dans le fichier /services/auth.service
    this.authStatus = this.authService.isAuth;
  }


  onSignIn() {

    // Utilise la fonction signIn contenu dans /services/auth.service pour simuler une connexion
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['/equipements']); // Redirection vers /equipements
      }
    );
  }

  onSignOut() {

    // Utilise la fonction signOut contenu dans /services/auth.service pour simuler une déconnexion
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
