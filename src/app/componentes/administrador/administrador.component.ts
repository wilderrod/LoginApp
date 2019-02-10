import { Component, OnInit } from '@angular/core';
import{ AuthService} from '../../servicios/auth.service'; 
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  constructor() { }
  public authService: AuthService
  ngOnInit() {
  }
  onClicklogout(){
    this.authService.logout();
  }
}
