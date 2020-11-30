import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { EquipementsComponent } from './equipements/equipements.component';
import { HttpClientModule } from '@angular/common/http';
import { ResearchBDDService } from './services/research-bdd.service';
import { LogsComponent } from './logs/logs.component';
import { OidsComponent } from './oids/oids.component';
import { CreerEquipementsComponent } from './creer-equipements/creer-equipements.component';
import { CreerOidsComponent } from './creer-oids/creer-oids.component';
import { CreerMonitoringComponent } from './creer-monitoring/creer-monitoring.component';

const appRoutes: Routes = [
  // Ici on définit sur quel component on renvoie l'utilisateur lorsqu'il se connecte sur une URL spécifique + canActivate: [AuthGuard] indique qu'il faut qu'il soit authentifié
  { path: 'equipements', canActivate: [AuthGuard], component: EquipementsComponent },
  { path: 'oidsequipement/:idEquipement', canActivate: [AuthGuard], component: OidsComponent },
  { path: 'logsoid/:idEquipement/:idOID', canActivate: [AuthGuard], component: LogsComponent },
  { path: 'creerequipements', canActivate: [AuthGuard], component: CreerEquipementsComponent },
  { path: 'creeroids', canActivate: [AuthGuard], component: CreerOidsComponent },
  { path: 'creermonitorings', canActivate: [AuthGuard], component: CreerMonitoringComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EquipementsComponent,
    LogsComponent,
    OidsComponent,
    CreerEquipementsComponent,
    CreerOidsComponent,
    CreerMonitoringComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    ResearchBDDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
