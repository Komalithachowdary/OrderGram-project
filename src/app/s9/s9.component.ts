import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-s9',
  templateUrl: './s9.component.html',
  styleUrls: ['./s9.component.css']
})
export class S9Component implements OnInit {
  product:Product;
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params.id
    // console.log(this.route.snapshot.params.id)
    this.productService.getProductById(id).subscribe((data:Product)=>{
      this.product=data;
      console.log(data)
    })
  }

}
