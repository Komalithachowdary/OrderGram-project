import { CategoryComponent } from './category/category.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { GallaryComponent } from './gallary/gallary.component';
import { S9Component } from './s9/s9.component';
import { BuyComponent } from './buy/buy.component';
import { FinalComponent } from './final/final.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
{
path: '',
component: HomeComponent,
},
{
path: 'login',
component: LoginAccountComponent,
},
{
path: 'create',
component: CreateAccountComponent,
},
{
path: 'add',
component: AddressComponent,
},
{
path: 'payment',
component: PaymentComponent,
},
{
  path:"products",
  component: CategoryComponent
},{
  path:"category/:name",
  component: ChooseCategoryComponent,
},
{
  path:"category/view/gallery",
  component:GallaryComponent
}
,{
  path:"product/new",
  component:AddProductComponent
},{
  path:"product/:id",
  component:S9Component
},
{
  path:"buy",
  component:BuyComponent
},
{
  path:"success/orderId",
  component:FinalComponent
}
// {
//   path:"mycart",
//   component:
// }

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
