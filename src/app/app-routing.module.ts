import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  //http://localhost:4200/
  {path:'',component:ProductListComponent},
  //http://localhost:4200/checkout
  {path:'checkout',component:CartComponent},
  //http://localhost:4200/products/101
  //http://localhost:4200/products/102
  //http://localhost:4200/products/103
  //http://localhost:4200/products/...
  {path:'products/:productId',component:ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
