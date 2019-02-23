import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../servicios/user.service';
import { User} from '../../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
userList: User[];

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.userService.getUser()
      .snapshotChanges().subscribe(item => {
        this.userList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.userList.push(x as User);
        });
      });
  }

  onEdit(user: User) {
    this.userService.selectUser = Object.assign({}, user);
  }

  onDelete($key: string) {
    if(confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.deleteUser($key);
      this.toastr.warning('Eliminación exitosa', 'Usuario Removido');
    }
  }

}
