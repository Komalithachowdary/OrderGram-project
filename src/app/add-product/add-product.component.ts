import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'browserslist';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@ViewChild("prod",{static:false}) form:NgForm
  constructor(private product:ProductService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.product.saveProduct(this.form.value).subscribe((data:Product)=>{
      console.log(data)
      alert("product created with id "+data.id)
      
    })
  }

}
