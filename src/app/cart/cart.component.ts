import { Component,OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from './name.validator';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  public items:Product[]=[];//koji su sve proizvodi odabrani od strane korisnika

  public checkoutForm:FormGroup;

  constructor(private cartService:CartService,
    private formBuilder:FormBuilder){
    this.items=this.cartService.getItems();//dohvati iz servisa sve prozivode koje je korisnik izabrao
    this.checkoutForm=this.formBuilder.group({
      name:['',[Validators.required,nameValidator]],//prvi parametar je pocetna vrednost,drugi je koja je validacija u pitanju(stavljamo u uglaste zato sto moze biti vise ogranicenja za jedno polje),PRVOBITO JE BILO Validators.pattern('[0-9]+ [a-zA-Z0-9]')]
      address:['',[Validators.required,Validators.pattern('[0-9]+ [a-zA-Z0-9]')]],
      email:['',[Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
      
  }

  public  name(){
    return this.checkoutForm.get('name');
  }

  public  address(){
    return this.checkoutForm.get('address');
  }

  public  email(){
    return this.checkoutForm.get('email');
  }

  public submitForm(data:any){
    console.log(data);
    if(!this.checkoutForm.valid){
      window.alert('Not valid!');
      return;
    }

    this.items=this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  

}
