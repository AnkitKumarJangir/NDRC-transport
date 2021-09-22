import { Injectable } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private admservice:AdminLoginComponent) { }
  isAdminRights(){
    

  }
  
}
