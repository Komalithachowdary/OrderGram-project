import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ordergram';
  productsData:any;
  constructor(private products:ProductService){}
  ngOnInit(){
this.products.getAllProducts().subscribe((data)=>{
  this.productsData=data;
})

  }
}
