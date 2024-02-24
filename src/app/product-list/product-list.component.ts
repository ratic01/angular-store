import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products:Product[];
  constructor(private productService: ProductService){ //pristupamo servisu
    this.products=this.productService.getProducts();//i iz te instance dohvatimo proizvode
  }
  ngOnInit() {
      
  }

}
