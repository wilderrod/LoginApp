import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList}from 'angularfire2/database';
import {User} from '../models/user';
@Injectable()
export class UserService {
  
  userList:AngularFireList<any>;
  selectUser:User = new User();

  constructor(private angularfireDatabase: AngularFireDatabase) {}
    getUser()
    {
      return this.userList=this.angularfireDatabase.list('usuario');
    }
    insertUser(user: User)
    {
       this.userList.push({
       name: user.name,
       apellido: user.apellido,
       locacion:user.locacion,
        edad:user.edad
});
    }
      updateUser(user:User)
      {
        this.userList.update(user.$key,{
           name: user.name,
          apellido: user.apellido,
          locacion:user.locacion,
           edad:user.edad
});
} 
deleteUser($key:string)
{
  this.userList.remove($key);
}

}
