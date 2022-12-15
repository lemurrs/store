import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable, tap} from "rxjs";
import {ILogin} from "../models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
              private errorService:ErrorService,
              private router: Router,
) { }


  setToken(token:string){
    localStorage.setItem('token',token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getAuth(){
    return(Boolean(this.getToken()))
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  login(user:ILogin):Observable<ILogin | any>{
    return this.http.post<ILogin | any>('https://fakestoreapi.com/auth/login',user).pipe(
      tap(prod=>{
        if(user.rememberMe) this.setToken(prod.token)
      })
    )

  }

}
