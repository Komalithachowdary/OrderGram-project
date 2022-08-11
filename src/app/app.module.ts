import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FinalComponent } from './final/final.component';
import { S9Component } from './s9/s9.component';
import { MessagesComponent } from './messages/messages.component';
import { BuyComponent } from './buy/buy.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    LoginAccountComponent,
    AddressComponent,
    PaymentComponent,
    CategoryComponent,
    ChooseCategoryComponent,
    GallaryComponent,
    FinalComponent,
    S9Component,
    MessagesComponent,
    BuyComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
