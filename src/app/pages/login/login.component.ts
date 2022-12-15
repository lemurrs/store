import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private AuthService: AuthService,
              private router: Router) {
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
    this.AuthService.login({
      username:this.loginForm.value.username as string,
      password:this.loginForm.value.password as string,
      rememberMe:this.loginForm.value.rememberMe as boolean
    }).subscribe({
      next:()=> this.router.navigate(['/'])
    })
  }
ngOnInit() {
    if(this.AuthService.getAuth()) this.router.navigate(['/'])
}


}
