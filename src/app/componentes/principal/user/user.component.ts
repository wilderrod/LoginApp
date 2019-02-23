import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../servicios/user.service';
import { User} from '../../../models/user';
import { ToastrService } from 'ngx-toastr';
//import { HttpClient } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private toastr: ToastrService
    )
   { }

  ngOnInit() {
    this.userService.getUser();
    this.resetForm();
  }
  onSubmit(userForm: NgForm)
  {
    if(userForm.value.$key == null)
      this.userService.insertUser(userForm.value);
    else
    this.userService.updateUser(userForm.value);
    
    this.resetForm(userForm);
    this.toastr.success('Operación Exitosa', 'Usuario Registrado');
  }

  resetForm(userForm?: NgForm)
  {
    if(userForm != null)
      userForm.reset();
      this.userService.selectUser = new User();
  }
}
