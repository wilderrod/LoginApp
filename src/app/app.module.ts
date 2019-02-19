import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';
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
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';//
import {AuthService} from './servicios/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { UserListComponent } from './componentes/principal/user-list/user-list.component';
import { UserComponent } from './componentes/principal/user/user.component';
import { UserService } from './servicios/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    NotfoundpageComponent,
    UsuarioComponent,
    PrincipalComponent,
    ContactoComponent,
    ReporteComponent,
    UserListComponent,
    UserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FlashMessagesModule
  ],
  providers: [UserService,AuthService,AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
