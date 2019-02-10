import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './componentes/home/home.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegisterComponent} from './componentes/register/register.component';
import {UsuarioComponent} from './componentes/usuario/usuario.component';
import {AdministradorComponent} from './componentes/administrador/administrador.component';
import {InvitadoComponent} from './componentes/invitado/invitado.component';
import {NotfoundpageComponent} from './componentes/notfoundpage/notfoundpage.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
