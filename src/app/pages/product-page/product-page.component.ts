import { Component } from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: IProduct[]=[]
  loading=false
  term=''
  defaultValue=4

  constructor(public productsService:ProductsService,
              public modalService:ModalService,
              public authService:AuthService,
              public router:Router
  ) {

  }
  ShowMore(){
    this.defaultValue+=4
    this.productsService.getAll(this.defaultValue).subscribe()
  }

  ngOnInit(): void {

    this.loading=true
    this.productsService.getAll(this.defaultValue).subscribe(()=>{
      this.loading=false
    })
  }

}
