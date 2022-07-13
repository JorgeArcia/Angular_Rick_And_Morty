import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public validateLogin(userIn: string, passwordIn:string) {
    let isUserFound = false;
    let isPasswordFound = false;

    if(userIn == userData.user) isUserFound = true;
    if(passwordIn == userData.password) isPasswordFound = true;

    return isUserFound && isPasswordFound;
  }

  public GetUserName(){
    return userData.user;
  }

  public changedPasswordService(newPassword: string){
    userData.password = newPassword;
    alert('Se actualizo su password');
  }

}


const userData = {
  "user":"superadmin",
  "password":"Azerty?.123"
}
