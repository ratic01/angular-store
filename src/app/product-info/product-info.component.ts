import { Component,OnInit,OnDestroy } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription,Observable } from 'rxjs';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  public product:Product;

  private paramMapSub: Subscription | null| any;

  //http://localhost:4200/products/:productId
  //pogledaj ponovo ovaj kod!!!
  constructor(private productService: ProductService,
    private route:ActivatedRoute,
    private cartService:CartService){
      this.paramMapSub=this.route.paramMap.subscribe(params=> {
       const pId:number=Number(params.get('productId'));

       this.product=this.productService.getProducts()
          .filter(p=>p.productId===pId)[0];
    
    });

  }

  ngOnInit() {
      
  }

  ngOnDestroy() {
    if(this.paramMapSub!=null){
      this.paramMapSub.unsubscribe();
      this.paramMapSub=null;
    }
      
  }

  public addToCart(){

    this.cartService.addToCart(this.product);

  }

}
