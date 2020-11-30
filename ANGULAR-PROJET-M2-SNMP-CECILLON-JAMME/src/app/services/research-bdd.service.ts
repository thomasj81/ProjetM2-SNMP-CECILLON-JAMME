import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ResearchBDDService {

  constructor(private http: HttpClient) {
  }

  //Requête GET vers NodeJS pour récupérer l'ensemble des équipements enregistrés dans la BDD.
  getEquipements(): Observable<any> {
    const url: string = 'http://127.0.0.1:3000/equipements/';
    const observable: Observable<any> =
      this.http.get(url);
    return observable;
  }

  //Requête GET vers NodeJS pour récupérer l'ensemble des OIDS enregistrés dans la BDD.
  getOIDS(): Observable<any> {
    const url: string = 'http://127.0.0.1:3000/oids/';
    const observable: Observable<any> =
      this.http.get(url);
    return observable;
  }

  //Requête GET vers NodeJS pour récupérer l'ensemble des OIDS associés à un équipement dans la BDD.
  getOIDSEquipement(idEquipement): Observable<any> {
    const url: string = 'http://127.0.0.1:3000/oidsequipement/' + idEquipement;
    const observable: Observable<any> =
      this.http.get(url);
    return observable;
  }

  //Requête GET vers NodeJS pour récupérer l'ensemble des Logs associés à la fois à un oid et à la fois à un équipement dans la BDD.
  getLogs(idEquipement, idOID): Observable<any> {
    const url: string = 'http://127.0.0.1:3000/logsoid/' + idEquipement + '/' + idOID;
    const observable: Observable<any> =
      this.http.get(url);
    return observable;
  }

  //Requête POST vers NodeJS pour enregistrer un équipement dans la BDD.
  setEquipement(formulaireEquipement: FormGroup): Observable<any> {
    const url = 'http://127.0.0.1:3000/creerequipement';
    const data = { formulaireEquipement: formulaireEquipement.value };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(data);
    const observable: Observable<any> = this.http.post(url, JSON.stringify(data), httpOptions);
    return observable;
  }

  //Requête POST vers NodeJS pour enregistrer un OID dans la BDD.
  setOID(formulaireOID: FormGroup): Observable<any> {
    const url = 'http://127.0.0.1:3000/creeroid';
    const data = { formulaireOID: formulaireOID.value };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(data);
    const observable: Observable<any> = this.http.post(url, JSON.stringify(data), httpOptions);
    return observable;
  }

  //Requête POST vers NodeJS pour enregistrer une association équipement+OID (donc pour créer une ligne de monitoring) dans la BDD.
  setMonitoring(formulaireMonitoring: FormGroup): Observable<any> {
    const url = 'http://127.0.0.1:3000/creermonitoring';
    const data = { formulaireMonitoring: formulaireMonitoring.value };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(data);
    const observable: Observable<any> = this.http.post(url, JSON.stringify(data), httpOptions);
    return observable;
  }

}
