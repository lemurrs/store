import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn:'root'
})
export class ProductsService{
  constructor(private http: HttpClient,
              private errorService:ErrorService) {

  }

  products:IProduct[]=[]

  getAll(value:number):Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products',{
      params:new HttpParams().append('limit',value)
      // params:new HttpParams({
      //   fromString:'limit=5'
      // })
      // params:new HttpParams({
      //   fromObject:{limit:5}
      // })
    }).pipe(
      delay(200),// задержка стрима
      catchError(this.errorHandler.bind(this)),
      retry(2),
      tap(products=>this.products=products)
    )
  }
  private errorHandler(error:HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=>error.message)
  }
  create(product:IProduct):Observable<IProduct>{
return this.http.post<IProduct>('https://fakestoreapi.com/products',product).pipe(
  tap(prod=>this.products.push(prod ))
)
  }
}
