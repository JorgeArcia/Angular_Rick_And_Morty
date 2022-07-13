import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(private userService: UsersService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]{6,12}$/)]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$$/)])
    })
   }

   get controles() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.loginForm.valid) {
      if (this.userService.validateLogin(this.loginForm.value.username,this.loginForm.value.password)) {
        localStorage.setItem('elUser',this.loginForm.value.username);
        localStorage.setItem('password',this.loginForm.value.password);
        this.router.navigate(['/menu']);
      }
      else{
        this.errorMessage = "Usuario o contraseña incorrecta"
      }
    }

  }

}
