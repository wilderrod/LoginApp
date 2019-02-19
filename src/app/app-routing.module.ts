import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HomeComponent} from './componentes/home/home.component';
import {LoginComponent} from './componentes/login/login.component';
//import {LogoutComponent} from ''
import {RegisterComponent} from './componentes/register/register.component';
import {UsuarioComponent} from './componentes/usuario/usuario.component';
import {NotfoundpageComponent} from './componentes/notfoundpage/notfoundpage.component';
import {PrincipalComponent} from './componentes/principal/principal.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';
import {ReporteComponent} from './componentes/reporte/reporte.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //{ path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'principal', component: PrincipalComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
