import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { GaleriaComponent } from './galeria/galeria.component';

import { HomeComponent } from './home/home.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'contate-nos', component: ContateNosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'reserva', component: ReservasComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
