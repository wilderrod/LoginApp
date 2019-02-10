import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularFireModule } from '@angular/fire';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
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

import {AuthService} from './servicios/auth.service';

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
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
