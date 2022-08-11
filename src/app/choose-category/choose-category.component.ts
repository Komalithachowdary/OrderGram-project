import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.component.html',
  styleUrls: ['./choose-category.component.css']
})
export class ChooseCategoryComponent implements OnInit {
  products:Array<Product>;
  subCat:string[]=[]; 
  constructor(private router: Router,private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
let category:string = this.route.snapshot.params.name
this.productService.getProductByCategory(category.toLowerCase()).subscribe((data:Product[])=>{
  console.log(data)
  this.products=data
  for(let prod of this.products){
    if(this.subCat.indexOf(prod.subCategory)>0) continue;
    this.subCat.push(prod.subCategory)

  }
  console.log(this.subCat)
  
})
    
  }
  onCategoryChange(event){
    console.log(event.target.value)
this.router.navigate([`/category/view/gallery`],{queryParams:{sc:event.target.value}})
  }

}
