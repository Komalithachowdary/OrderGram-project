import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  products:Array<Product>;
  constructor(private route:ActivatedRoute,private productService:ProductService) {
   }

  ngOnInit() {
    let queryParam =this.route.snapshot.queryParams.sc
    this.productService.getProductBySubCategory(queryParam).subscribe((data:Array<Product>)=>{
      console.log(data)
      this.products=data;
    })
  }

}
