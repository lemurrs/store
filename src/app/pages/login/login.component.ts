import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: AuthService ) {
  }

  loginForm=new FormGroup({
    username: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    password:new FormControl<string>('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    rememberMe:new FormControl<boolean>(false)
  })

  get formData(){
    return {
      email:this.loginForm.controls.username as FormControl,
      password:this.loginForm.controls.password as FormControl,
      rememberMe:this.loginForm.controls.rememberMe as FormControl,
      }
  }

  submit(){
    console.log(this.loginForm.value)
    this.loginService.login({
      username:this.loginForm.value.username as string,
      password:this.loginForm.value.password as string
    }).subscribe()
  }



}
