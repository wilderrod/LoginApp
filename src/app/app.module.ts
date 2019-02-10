import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { NotfoundpageComponent } from './componentes/notfoundpage/notfoundpage.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { InvitadoComponent } from './componentes/invitado/invitado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    NotfoundpageComponent,
    UsuarioComponent,
    AdministradorComponent,
    InvitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
