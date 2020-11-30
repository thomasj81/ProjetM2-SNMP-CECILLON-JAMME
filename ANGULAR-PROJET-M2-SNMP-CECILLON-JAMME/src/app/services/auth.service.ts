export class AuthService {

  isAuth = false;

  // Permet de simuler un processus de connexion avec un timeout qui passe isAuth à true.
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  // Permet de simuler une déconnexion.
  signOut() {
    this.isAuth = false;
  }
}