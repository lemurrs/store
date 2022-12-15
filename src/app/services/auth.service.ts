import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {IProduct} from "../models/product";
import {Observable, tap} from "rxjs";
import {ILogin, IUser} from "../models/user";
import {Router} from "@angular/router";
import {getTokenAtPosition} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private errorService:ErrorService,
              private router: Router
) { }

  setAuth(token:string){

  }
  getAuth(){
    return 0
  }
  isLoggedIn(){
    return this.getAuth() !== null
  }

  login(user:ILogin):Observable<ILogin>{
    return this.http.post<ILogin>('https://fakestoreapi.com/auth/login',user)
  }

}
