import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import{ AuthService} from '../../servicios/auth.service'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public authService: AuthService, private afAuth: AngularFireAuth) { }
  public isLogin: boolean = false;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

onClickLogout() {
  //this.authService.logout();
  this.afAuth.auth.signOut();
}
}
