import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any;
  private apiUrl = "http://localhost:8800/product"
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(`${this.apiUrl}/list`)
  }
  saveProduct(product){
    return this.http.post(`${this.apiUrl}/create`,product);
  }
  getProductByCategory(category:string){
    return this.http.get(`${this.apiUrl}/list/${category}`)
  }
  getProductBySubCategory(subCategory:string){
    return this.http.get(`${this.apiUrl}/list/subcategory/${subCategory}`)
  }
  getProductById(id){
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
