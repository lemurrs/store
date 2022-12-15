import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {dirname} from "@angular/compiler-cli";



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{
  constructor(private productService:ProductsService,
              private modalService:ModalService ) {
  }

  disabled=false

  form=new FormGroup({
    title: new FormControl<string>('',[
      Validators.required
    ]),
    price: new FormControl<number | null>(null,[
      Validators.required
    ]),
    description: new FormControl<string>('',[
      Validators.required
    ]),
    image: new FormControl<string>('',[
      Validators.required
    ]),
    category: new FormControl<string>('',[
      Validators.required
    ]),
    rate: new FormControl<number | null>(null,[
      Validators.required
    ]),
    count: new FormControl<number | null>(null,[
      Validators.required
    ]),
  })
  get formData(){
    return {
      title:this.form.controls.title as FormControl,
      price:this.form.controls.price as FormControl,
      description:this.form.controls.description as FormControl,
      image:this.form.controls.image as FormControl,
      category:this.form.controls.category as FormControl,
      rate:this.form.controls.rate as FormControl,
      count:this.form.controls.count as FormControl,
    }
  }
  submit(){
    this.disabled=true
    this.productService.create({
      title: this.form.value.title as string,
      price: this.form.value.price as number,
      description:this.form.value.description as string,
      image: this.form.value.image as string,
      category: this.form.value.category as string,
      rating:{
        rate:this.form.value.rate as number,
        count:this.form.value.count as number
      }
    }).subscribe(()=>{
      this.modalService.close()
      this.disabled=false
    })
  }
  ngOnInit() {
  }
}
