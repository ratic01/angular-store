import { Component,OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  public items:Product[]=[];//koji su sve proizvodi odabrani od strane korisnika
  constructor(private cartService:CartService){
    this.items=this.cartService.getItems();//dohvati iz servisa sve prozivode koje je korisnik izabrao
  }

  ngOnInit() {
      
  }

}
