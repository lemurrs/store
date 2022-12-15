import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products:IProduct[],title:string,category:string): IProduct[] {
    let filteredResults=products;
    if(!category && !title) return products
    if(category) filteredResults=filteredResults.filter(el=>el.category.toLowerCase()===category.toLowerCase())
    if(title) filteredResults=filteredResults.filter(el=>el.title.toLowerCase().includes(title.toLowerCase()))
    return filteredResults

    };
  }

