import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:Product[];

  constructor() {
    this.products=[
      new Product(101,'Telefon1',3000,"opis za telefon 1"),
      new Product(102,'Telefon2',2500,"opis za telefon 2"),
      new Product(103,'Telefon3',6600,"opis za telefon 3")
    ]
   }

   public getProducts(): Product[]{
    return this.products;
   }
}
